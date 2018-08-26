const { Model } = require("objection");
const knexfile = require("./knexfile");
const Knex = require("knex");
const knex = Knex(knexfile["development"]);
Model.knex(knex);

class BaseModel extends Model {
  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = BaseModel;
