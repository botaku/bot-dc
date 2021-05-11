const Discord = require('discord.js')
    torak = require('./handler/clientbuild.js') 
    client = new torak();

require("./handler/module.js")(client)
require("./handler/events.js")(client)

client.package = require("./package.json")
client.on('warn', console.warn)
client.on('error', console.error)
client.login(client.config.token).catch(console.error)