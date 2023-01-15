const { CommandInteraction, ApplicationCommandType, SlashCommandBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder,} = require("discord.js");
const BOT = require("../handlers/Client");
const data = new SlashCommandBuilder()
	.setName('eval')
	.setDescription('goofy eval command')
	.addStringOption(option =>
		option.setName('string')
			.setDescription('what to evaluate'));
            client.on(Events.InteractionCreate, async interaction => {
                if (!interaction.isChatInputCommand()) return;
            
                if (interaction.commandName === 'eval') {
                    await interaction.reply({ content: 'no', ephemeral: true });
                }
            });
    