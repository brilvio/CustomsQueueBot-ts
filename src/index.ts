import { DiscordClient } from 'bot/discord';
import { commandHandler } from 'commands-handler';
import { config } from 'config/config';

require('dotenv').config();

(async () => {
  await commandHandler.init();
  config.init();
  const discordClient: DiscordClient = new DiscordClient();
  discordClient.start();
})();
