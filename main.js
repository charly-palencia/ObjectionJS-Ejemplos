const appIds = require("./app-ids");
const SteamApp = require("./SteamApp");
const lodash = require("lodash");
const url =
  "http://store.steampowered.com/api/appdetails?appids=582010&filters=basic,platforms,price_overview&cc=US&l=english";
const fetch = require("node-fetch");
const parseData = async data => {
  await SteamApp.query().truncate();

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
    "price_overview"
  ];
  const steamAppData = lodash.pick(app, attributes);

  try {
    await SteamApp.query().insert(steamAppData);
  } catch (error) {
    console.log(error);
  }
};
fetch(url)
  .then(res => res.json())
  .then(parseData)
  .then(process.exit);
