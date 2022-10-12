const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
module.exports = {
  VERSION: 'v1.0.0',
  BRANCH: "main",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
  ALIVE: process.env.ALIVE || "https://i.imgur.com/rN6vG0V.jpeg Hey {sender}, I'm alive \n Uptime: {uptime}",
  Session_Id: process.env.SESSION_ID || "R0hQalJ3Ulo=",
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  LANG: process.env.LANG || "EN",
  AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? '𝐴𝑏𝑢¹¹ꫂ;Abu MD bot;https://i.imgur.com/cO6Ddfh.jpeg' : process.env.AUDIO_DATA,
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[.]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  PACKNAME: process.env.PACKNAME || "ABHI BRO",
  WELCOME_MSG:
    process.env.WELCOME_MSG ||
    "{pp}Hi @user Welcome to @gname\nYou're our @count/513 Members ",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "Jsl",
  DATABASE: DATABASE_URL === './database.db' ? new Sequelize({ dialect: 'sqlite', storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
  BOT_INFO: process.env.BOT_INFO || 'ABHI MD,Jsl,ABHI BRO,ABHI MD,https://i.imgur.com/rN6vG0V.jpeg',
  SUDO: process.env.SUDO || "918137093395",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || ""5151d23e-59ec-4e5b-9ca9-b24e0463c73a"
 https://dashboard.heroku.com/account#:~:text=5151d23e%2D59ec%2D4e5b%2D9ca9%2Db24e0463c73a",
  IMAGE_URL: process.env.IMAGE_URL || "https://i.imgur.com/rN6vG0V.jpeg",
  BOT_NAME: process.env.BOT_NAME || "ABHI BRO-MD",
  MODE: process.env.MODE || "public",
  LANGUAGE: process.env.LANGUAGE || 'english',
};
