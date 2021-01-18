/* eslint-disable new-cap */
/* eslint-disable no-restricted-syntax */
import glob from 'glob';
import { ICommand } from 'models/commands';
import moment from 'moment';

class CommandsHandler {
  commands: Array<ICommand> = [];

  async init() {
    const modules = glob.sync('commands/**/*', { cwd: __dirname });
    for (let module of modules) {
      if (module.endsWith('.ts') || module.endsWith('.js')) {
        if (module.endsWith('.js')) {
          // for when it's builded for production
          module = `./${module}`;
        }
        // eslint-disable-next-line no-await-in-loop
        const command: ICommand = new (await import(module)).default();

        this.commands.push(command);
        console.log(`${moment().format()} => [COMMANDS] : ${command.command} was loaded.`);
      }
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export const commandHandler = new CommandsHandler();
