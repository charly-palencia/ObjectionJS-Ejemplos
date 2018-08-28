const BaseModel = require("./BaseModel");
const { Model } = require("objection");

class SteamApp extends BaseModel {
  static get tableName() {
    return "steam_apps";
  }

  static get jsonSchema() {
    return {
      type: "object",
      // required: ["name"],

      properties: {
        id: { type: "integer" },
        name: { type: ["string", "null"] },
        price_overview: {
          type: "object",
          properties: {
            initial: { type: "number" },
            final: { type: "number" },
            currency: { type: "string" }
          }
        }
      }
    };
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
