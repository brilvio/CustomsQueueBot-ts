/* eslint-disable no-unused-vars */
import { Message } from 'discord.js';

export interface IParameters {
  name: string;
  description: string;
}
export interface ICommand {
  command: string;
  alias: Array<string>;
  summary: string;
  parameters: Array<IParameters>;
  execute(message: Message, args?: Array<any>): Promise<void>;
}
