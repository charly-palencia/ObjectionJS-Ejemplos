exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("platorms").del()
    .then(function () {
      // Inserts seed entries
      return knex("platforms").insert([
        {colName: "windows"},
        {colName: "mac"},
        {colName: "linux"}
      ]);
    });
};
