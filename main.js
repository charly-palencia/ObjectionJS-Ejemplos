const appIds = require("./app-ids");
const SteamApp = require("./SteamApp");
const Platform = require("./Platform");
const lodash = require("lodash");
const fetch = require("node-fetch");
const parseData = async (data, id) => {
  // await knex("steam_apps").increment("t",1).update();
  // await SteamApp.query().truncate();

  if (data === null) {
    console.log("error for", id);
    return Promise.reject();
  }

  const app = Object.values(data)[0].data;
  const attributes = [
    "name",
    "type",
    "steam_appid",
    "required_age",
    "is_free",
    "detailed_description",
    "reviews",
    "header_image",
    "website",
    "price_overview",
    "platforms"
  ];
  return lodash.pick(app, attributes);
};

const fetchInformation = async () => {
  try {
    await Platform.knex().raw("TRUNCATE platforms RESTART IDENTITY CASCADE");
    await SteamApp.knex().raw("TRUNCATE steam_apps  RESTART IDENTITY CASCADE");

    const requests = appIds.map(id => {
      const url = `http://store.steampowered.com/api/appdetails?appids=${id}&filters=basic,platforms,price_overview&cc=US&l=english`;
      return fetch(url)
        .then(res => res.json())
        .then(data => parseData(data, id));
    });

    const apps = await Promise.all(requests);
    await SteamApp.query()
      .allowInsert("")
      .insertWithRelated(apps);
  } catch (error) {
    console.log(error);
  }
};

fetchInformation();
