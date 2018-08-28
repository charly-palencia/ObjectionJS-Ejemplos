const repl = require("repl");
const SteamApp = require("./SteamApp");
const Platform = require("./Platform");
var colors = require("colors");
var emoji = require("node-emoji");

console.log(emoji.get("mag_right"), "Welcome to my console".rainbow);
console.log("Happy query".green);
const r = repl.start("> ");
r.context.SteamApp = SteamApp;
r.context.Platform = Platform;
