import { IBotConfig } from 'models/config';

class Config implements IBotConfig {
  token: string;
  prefix: string;
  reaction: string;
  groupsize: number;
  async init() {
    this.token = process.env.TOKEN;
    this.prefix = process.env.PREFIX; // TODO: get this from a DB;
    this.reaction = process.env.REACTION; // TODO: get this from a DB;
    this.groupsize = Number(process.env.GROUPSIZE); // TODO: get this from a DB;
  }
}

export const config = new Config();
