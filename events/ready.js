const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const settings = require('../auth.json');

var prefix = settings.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Active, Commands loaded!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} Login with the name!`);
  client.user.setStatus("dnd");
  client.user.setActivity(`${client.guilds.size} Server`)
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Game name set!`);
};
