/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
import { commandHandler } from 'commands-handler';
import { config } from 'config/config';
import { parse } from 'discord-command-parser';
import { Client, Message } from 'discord.js';
import { log } from 'logger';
import { ICommand } from 'models/commands';

export class DiscordClient {
  private client: Client;

  constructor() {
    this.client = new Client();
  }

  public start(): void {
    log.info('Starting bot...');

    if (!config.token) {
      // eslint-disable-next-line max-len
      // Check for bot's token. Same thing as: if (Config.bot.token == "" || Config.bot.token == null) return;
      log.error("The bot's token is not set. Set the token in the config file .env");
      return;
    }

    if (!config.prefix) {
      // Check for bot's prefix.
      log.error("The bot's prefix is not set. Set the prefix in the config file .env");
      return;
    }

    log.debug(`[Prefix Key] : Set to [${config.prefix}].`);

    // => Bot is ready...
    this.client.on('ready', async () => {
      log.debug(`Logged in as ${this.client.user.tag}`);
      await this.client.user.setActivity(`${config.prefix}help`, { type: 'PLAYING' }); // Shows the prefix and "help" under Username.
      this.client.user.setStatus('online'); // Set the bot as online
    });

    // => Message handler
    this.client.on('message', (message: Message) => {
      // => Prevent message from the bot
      if (message.author.id !== this.client.user.id) {
        // => Test command
        const parsed = parse(message, config.prefix, { allowSpaceBeforeCommand: true });
        if (!parsed.success) return;

        // eslint-disable-next-line max-len
        const command: ICommand = commandHandler.findCommand(parsed.command);
        if (!command) {
          message.reply(`Sorry this command ${parsed.command} does not exist!`);
        }
        command.execute(message, parsed.arguments);
      }
    });

    // => Bot error and warn handler
    this.client.on('error', log.error);
    this.client.on('warn', log.warn);

    // => Process handler
    process.on('exit', () => {
      log.debug(`[${this.client.user.tag}] Process exit.`);
      this.client.destroy();
    });
    process.on('uncaughtException', (err: Error) => {
      const errorMsg = (err ? err.stack || err : '').toString().replace(new RegExp(`${__dirname}/`, 'g'), './');
      log.error(errorMsg);
    });
    process.on('unhandledRejection', (err: Error) => {
      log.error(`Uncaught Promise error: \n${err.stack}`);
    });

    // => Login
    this.client.login(config.token);
  }
}
