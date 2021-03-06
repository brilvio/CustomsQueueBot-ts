import glob from 'glob';
import { log } from 'logger';
import { ICommand } from 'models/commands';
import moment from 'moment';

class Modules {
  moduleName: string;
  commands: Array<ICommand> = [];
}

class CommandsHandler {
  findCommand(command: string): ICommand {
    let com: ICommand = null;
    for (const mod of this.modules) {
      // eslint-disable-next-line max-len
      com = mod.commands.find((el) => el.alias?.indexOf(command) > 0 || el.command === command);
      if (com) {
        return com;
      }
    }
    return com;
  }

  modules: Array<Modules> = [];
  async init() {
    const modules = glob.sync('commands/**/*', { cwd: __dirname });
    for (let module of modules) {
      if (module.endsWith('.ts') || module.endsWith('.js')) {
        if (module.endsWith('.js')) {
          // for when it's builded for production
          module = `./${module}`;
        }
        // eslint-disable-next-line no-await-in-loop
        const mol = await import(module);
        let moduleName = '';
        for (const key in mol) {
          if (Object.prototype.hasOwnProperty.call(mol, key)) {
            if (key === 'moduleName') {
              this.modules.push({ moduleName: mol[key], commands: [] });
              moduleName = mol[key];
            } else {
              const command: ICommand = new mol[key]();
              log.debug(`${moment().format()} => [COMMANDS] : ${command.command} from [MODULE] : ${moduleName} was loaded.`);
              // eslint-disable-next-line no-loop-func
              this.modules.find((el) => el.moduleName === moduleName)?.commands.push(command);
            }
          }
        }
      }
    }
  }
}

export const commandHandler = new CommandsHandler();
