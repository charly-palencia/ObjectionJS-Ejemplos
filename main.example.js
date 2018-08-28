const appIds = require("./app-ids");
// const SteamApp = require("./SteamApp");
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

const SteamApp = require("./SteamApp");

const fetchInformation = async () => {
  try {
    const steamApp = SteamApp.query().insert({
      name: "MONSTER HUNTER: WORLD",
      type: "game",
      steam_appid: 582010,
      required_age: 0,
      is_free: false,
      detailed_description: "...",
      reviews: "...",
      header_image:
        "https://steamcdn-a.akamaihd.net/steam/apps/582010/header.jpg?t=1533890901",
      website: "http://www.monsterhunterworld.com/",
      price_overview: {
        currency: "USD",
        initial: 5999,
        final: 5999,
        discount_percent: 0
      },
      platforms: { windows: true, mac: false, linux: false }
    });
    console.log(steamApp.toSql());
  } catch (error) {
    console.log(error);
  }
};

fetchInformation();
