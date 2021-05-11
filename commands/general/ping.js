const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.channel.send('Pong!')
}

exports.help = {
    name: 'Pong',
    description: 'Ponged',
    usage: '/ping',
    example: '/ping'
}

exports.conf = {
    aliases: ["beep"],
    cooldown: 10
}