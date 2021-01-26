/* eslint-disable comma-dangle */
import { commandHandler } from 'commands-handler';
import { config } from 'config/config';
import { Message, MessageEmbed } from 'discord.js';
import { ICommand, IParameters } from 'models/commands';

export const moduleName = 'Help';
export class Help implements ICommand {
  parameters: Array<IParameters> = [{ name: 'command-name', description: 'Command name that you want more information' }];
  command: string = 'help';
  alias: string[] = ['command', 'commands'];
  summary: string = ": Displays all of the bot's commands, or displays info about a specific command.";
  async execute(message: Message, args?: Array<any>): Promise<void> {
    return this.help(message, args);
  }

  // eslint-disable-next-line
  private async help(message: Message, args?: Array<any>) {
    const embed = new MessageEmbed();
    if (!args || args.length === 0) {
      embed.setColor([4, 137, 218]); // random colors for funsies.
      embed.setDescription(`Here are the commands. \nUse ${config.prefix}help [command] for more information on the command.`);

      for (const module of commandHandler.modules) {
        let description = '';
        for (const command of module.commands) {
          description += `${config.prefix}${command.command} ${command.summary}\n`;
        }
        embed.addField(`Module: ${module.moduleName}`, description, false);
      }

      message.reply(embed);
    } else {
      // eslint-disable-next-line max-len
      const command: ICommand = commandHandler.findCommand(args[0]);

      if (!command) {
        // If the command is not found
        message.reply(`Sorry, command **${args[0]}** could not be found.`);
        return;
      }

      embed.setColor([114, 137, 218]);
      embed.setDescription(`Here are the **${args[0]}** commands.`);

      embed.addField(
        `${command.command}${command.alias?.length ? `, ${command.alias?.join(', ')}` : ''}`,
        `Parameters: ${command.parameters.map((e) => e.name).join(', ')}\nSummary ${command.summary}`,
        false
      );
      message.reply(embed);
    }
  }
}
