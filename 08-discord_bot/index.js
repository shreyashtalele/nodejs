const { log } = require('console');
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return

    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1]
        return message.reply({
            content: "Generating Short Id for " + url
        })
    }
    console.log(message.reply({
        content: "hi from bot "
    }));

})

client.on('interactionCreate', (interaction) => {
    interaction.reply('pong')

})

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(
    ""
);