const Discord = require('discord.js')
const {
	prefix,
  token,
  yt_key,
  discord_id
} = require('./config.json')

const client = new Discord.Client()

// Require the Discord.js library.
const Discord = require('discord.js')

// Start a new Client from Discord.js. You can name this to whatever you like.
const client = new Discord.Client()

// Put the Music module in the new Client object.
// This allows for easy access to all the modules
// functions and data.
client.music = require("discord.js-musicbot-addon")
  // Now we start the music module.
  // Following the previous example.
  client.music.start(client, {
    // Set the api key used for YouTube.
    youtubeKey: yt_key,

    // The PLAY command Object.
    play: {
      // Usage text for the help command.
      usage: `${prefix}play some tunes`,
      // Whether or not to exclude the command from the help command.
      exclude: false
    },

    // Make it so anyone in the voice channel can skip the
    // currently playing song.
    anyoneCanSkip: true,

    // Make it so the owner (you) bypass permissions for music.
    ownerOverMember: true,
    ownerID: discord_id,

    // The cooldown Object.
    cooldown: {
      // This disables the cooldown. Not recommended.
      enabled: false
    }
  })

// Connect the bot with your Discord applications bot token.
client.login(token)
