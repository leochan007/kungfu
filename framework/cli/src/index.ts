import CFonts from 'cfonts';
import colors from 'colors';
import { version } from '../package.json';
import { Command, program } from 'commander';
import { listKfLocations } from './commanders/list';
import { selectMdTdStrategy, addMdTdStrategy } from './commanders/add';
import { KfCategoryTypes } from '@kungfu-trader/kungfu-js-api/typings/enums';
import {
  BASE_DB_DIR,
  KF_HOME,
  LOG_DIR,
} from '@kungfu-trader/kungfu-js-api/config/pathConfig';
import { updateMdTdStrategy } from './commanders/update';
import { removeMdTdStrategy } from './commanders/remove';
import { monitPrompt } from './commanders/monit';
import {
  ensureKungfuKey,
  initKfConfig,
} from '@kungfu-trader/kungfu-js-api/config';

if (process.argv.length === 2 || process.argv[2] === '-h') {
  console.log(colors.green('Welcome to kungfu trader system'));
  CFonts.say('KungFu', {
    font: 'block', // define the font face
    align: 'left', // define text alignment
    colors: ['yellow'], // define all colors
    background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 2, // define letter spacing
    lineHeight: 2, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0', // define how many character can be on one line
  });
}

program
  .version(version)
  .option('-l --list', 'list detail')
  .option('-a --add', 'add [for ext]')
  .option('-r --remove', 'remove [for ext]')
  .option('-k --kill', 'kill [for monit]');

program.on('command:*', function () {
  console.error(
    `Invalid command: ${program.args.join(
      ' ',
    )}\nSee --help for a list of available commands.`,
  );
  process.exit(1);
});

program
  .command('list')
  .description('list mds, tds and strategies')
  .action(() => {
    return listKfLocations()
      .catch((err: Error) => {
        console.error(err);
        process.exit(1);
      })
      .finally(() => process.exit(0));
  });

program
  .command('add')
  .description('add a md, td or strategy')
  .action(() => {
    return selectMdTdStrategy()
      .then((type: string) => addMdTdStrategy(type as KfCategoryTypes))
      .then(() => listKfLocations())
      .catch((err: Error) => {
        console.error(err);
        process.exit(1);
      })
      .finally(() => process.exit(0));
  });

program
  .command('update')
  .description('update a md, td or strategy')
  .action(() => {
    return updateMdTdStrategy()
      .then(() => listKfLocations())
      .catch((err: Error) => {
        console.error(err);
        process.exit(1);
      })
      .finally(() => process.exit(0));
  });

program
  .command('remove')
  .description('remove a md, td or strategy')
  .action(() => {
    return removeMdTdStrategy()
      .then(() => listKfLocations())
      .catch((err: Error) => {
        console.error(err);
        process.exit(1);
      })
      .finally(() => process.exit(0));
  });

program
  .command('monit [options]')
  .description(
    'monitor all process with merged logs OR monitor one trading process (with -l)',
  )
  .action((type: string, commander: Command) => {
    const list = (commander?.parent || {})['list'] || false;
    monitPrompt(!!list);
  });

program
  .command('showdir <home|log|base>')
  .description('show the dir path of home, log or base')
  .action((target: string) => {
    switch (target) {
      case 'home':
        console.log(KF_HOME);
        break;
      case 'log':
        console.log(LOG_DIR);
        break;
      case 'base':
        console.log(BASE_DB_DIR);
        break;
    }
    process.exit(0);
  });

program.on('command:*', function () {
  console.error(
    `Invalid command: ${program.args.join(
      ' ',
    )}\nSee --help for a list of available commands.`,
  );
  process.exit(1);
});

program.parse(process.argv);

initKfConfig();
ensureKungfuKey();
