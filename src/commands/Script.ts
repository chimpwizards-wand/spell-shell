import Debug from 'debug';
import { Command } from  '@chimpwizards/wand'
import { Execute } from  '@chimpwizards/wand'
import { CommandDefinition, CommandParameter, CommandArgument } from '@chimpwizards/wand/commons/command/'
const chalk = require('chalk');
const debug = Debug("w:cli:config");

@CommandDefinition({ 
    alias: 's',
    //parent: "shell",
    description: 'Add/Remove new reusable script into the configuration'
})
export class Script extends Command  { 

    execute(yargs: any): void {
        debug(`Do Nothing`)
        const executer = new Execute();
        let cmd = `w script --help`;
        executer.run({cmd: cmd, showLog: false})
    } 

}

export function register ():any {
    debug(`Registering....`)
    let command = new Script();
    debug(`INIT: ${JSON.stringify(Object.getOwnPropertyNames(command))}`)

    return command.build()
}

