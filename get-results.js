const SteamApp = require("./SteamApp");
let builder;

//get one result findById
//select "steam_apps".* from "steam_apps" where "steam_apps"."id" = 10
builder = SteamApp.query().findById(10);
// console.log(builder.toSql());
// console.log(builder.then(console.log));

// #get multiple result findByIds
// select "steam_apps".* from "steam_apps" where "steam_apps"."id" in (2, 3, 5)
builder = SteamApp.query().findByIds([2, 3, 5]);
// console.log(builder.toSql());
// console.log(builder.then(console.log));
// .then(console.log);

// #get multiple result findByIds
// select "steam_apps".* from "steam_apps" where "steam_apps"."id" in (2, 3, 5)
builder = SteamApp.query().findByIds([2, 3, 5]);
// console.log(builder.toSql());
// console.log(builder.then(console.log));
// .then(console.log);

// tips https://github.com/tgriesser/knex/blob/232fe9f1517dba927f6a3a1fb1b8842d7c0a4007/src/dialects/postgres/index.js#L247
// #findOne + limit ( i don't like fist knex method)
// builder = SteamApp.query().findOne({ is_free: true });
builder = SteamApp.query()
  .findOne({ is_free: false })
  .limit(1);
// builder.then(() => console.log);

// #findOne( i don't like fist knex method)
// builder = SteamApp.query().findOne({ is_free: true });
builder = SteamApp.query().findOne({ is_free: false });
// builder.then(console.log);

//builder with eager
//select "steam_apps".* from "steam_apps" where "reviews" is null limit ? , [1]
// select "platforms".* from "platforms" where "platforms"."steam_app_id" in (?) , [369]
builder = SteamApp.query()
  .where("reviews", null)
  .eager("platforms")
  .limit(1);
// builder.then(console.log);

//builder with  joins
//select "steam_apps".* from "steam_apps" inner join "platforms" on "platforms"."steam_app_id" = "steam_apps"."id" where "reviews" is null and "platforms"."linux" = ? limit ? , [true,1]
builder = SteamApp.query()
  .where("reviews", null)
  .where("platforms.linux", true)
  .joinRelation("platforms")
  .limit(1);
builder.then(console.log);

//builder with  joins +  eager
//select "steam_apps".* from "steam_apps" inner join "platforms" on "platforms"."steam_app_id" = "steam_apps"."id" where "reviews" is null and "platforms"."linux" = ? limit ? , [true,1]
// select "platforms".* from "platforms" where "platforms"."steam_app_id" in (?) , [369]
builder = SteamApp.query()
  .where("reviews", null)
  .where("platforms.linux", true)
  .joinRelation("platforms")
  .eager("platforms")
  .limit(1);
// builder.then(console.log);
