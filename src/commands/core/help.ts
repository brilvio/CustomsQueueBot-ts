import { commandHandler } from 'commands-handler';
import { config } from 'config/config';
import { Message, MessageEmbed } from 'discord.js';
import { ICommand } from 'models/commands';

export default class Help implements ICommand {
  command: string = 'help';
  alias: string[] = ['command', 'commands'];
  summary: string = ": Displays all of the bot's commands, or displays info about a specific command.";
  async execute(message: Message, args?: Array<any>): Promise<void> {
    return await this.help(message, args);
  }

  // eslint-disable-next-line
  private help(message: Message, args?: Array<any>) {
    console.log('test');
    const embed = new MessageEmbed();
    if (!args || args.length === 0) {
      embed.setColor([4, 137, 218]); //random colors for funsies.
      embed.setDescription(`Here are the commands. \nUse ${config.prefix}help [command] for more information on the command.`);

      for (const command of commandHandler.commands) {
        let description = `${config.prefix}${command.command}\n`;
        embed.addField(command.command, description, false);
      }

      message.reply(embed);
    } else {
      let command: ICommand = commandHandler.commands.find((el) => el.alias.findIndex((el) => el === args[0]) >= 0 || el.command === args[0]);

      if (!command) {
        // If the command is not found
        message.reply(`Sorry, command **${args[0]}** could not be found.`);
        return;
      }

      embed.setColor([114, 137, 218]);
      embed.setDescription(`Here are the **${args[0]}** commands.`);
      /*

        foreach (var match in result.Commands)
        {
            var cmd = match.Command;
            embed.AddField(x =>
            {
                x.Name = string.Join(", ", cmd.Aliases);
                x.Value = $"Parameters {string.Join(", ", cmd.Parameters.Select(p => p.Name))}\n" +
                $"Summary {cmd.Summary}";
                x.IsInline = false;
            });
        }

        await ReplyAsync(embed: embed.Build());*/
    }
  }
}
