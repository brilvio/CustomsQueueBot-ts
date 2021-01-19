/* eslint-disable no-unused-vars */
import { Message } from 'discord.js';

export interface ICommand {
  command: string;
  alias: Array<string>;
  summary: string;
  execute(message: Message, args?: Array<any>): Promise<void>;
}
