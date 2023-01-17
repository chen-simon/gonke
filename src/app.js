const { TOKEN } = require('../config.json');
const { chat } = require('./chat/chat');
const namemap = require('./chat/namemap.json');

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Chat bot
client.on('messageCreate', async interaction => {
  const channel = interaction.channel;
  let lastMessages = [];

  channel.messages.fetch({ limit: 8 }).then(messages => {
    messages.forEach(message => {
      lastMessages.push(`${namemap[message.author.username]}: ${message.content}\n`);
    })

    const lastMessage = lastMessages[0].toLowerCase();
    if (Math.random() > 0.02 && lastMessage.search("gonke") == -1) {
      return;
    }

    if (interaction.author.bot) {
      return;
    }

    chat(lastMessages.reverse().join("")).then(response => {
      console.log("gonke: " + response.data.choices[0].text);
      channel.send(response.data.choices[0].text.toLowerCase());
    });
  })
});

client.login(TOKEN);