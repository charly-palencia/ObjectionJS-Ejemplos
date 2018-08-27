const BaseModel = require("./BaseModel");
const { Model } = require("objection");

class SteamApp extends BaseModel {
  static get tableName() {
    return "steam_apps";
  }

  static get relationMappings() {
    return {
      platforms: {
        relation: Model.HasOneRelation,
        modelClass: require("./Platform"),
        join: {
          from: "steam_apps.id",
          to: "platforms.steam_app_id"
        }
      }
    };
  }
}

module.exports = SteamApp;
