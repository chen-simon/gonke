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
  try {
    const messages = await channel.messages.fetch({ limit: 8 });

    let lastMessages = messages.map(
      message => `${namemap[message.author.username]}: ${message.content}\n`
    );
    const lastMessage = lastMessages[0].toLowerCase();

    if (Math.random() > 0.02 && lastMessage.search("gonke") == -1) { return; }
    if (interaction.author.bot) { return; }

    try {
      const response = await chat(lastMessages.reverse().join(""));
      
      console.log("gonke: " + response.data.choices[0].text);
      channel.send(response.data.choices[0].text.toLowerCase());
    } catch {
      channel.send("I am out of money");
    }
  } catch {

  }
});

client.login(TOKEN);