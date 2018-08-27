const BaseModel = require("./BaseModel");

class Platform extends BaseModel {
  static get tableName() {
    return "platforms";
  }
}

module.exports = Platform;
