const BaseModel = require("./BaseModel");

class SteamApp extends BaseModel {
  static get tableName() {
    return "steam_apps";
  }
}

module.exports = SteamApp;
