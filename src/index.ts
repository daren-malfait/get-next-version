#!/usr/bin/env node
import path from 'path';
import conventionalRecommendedBump from 'conventional-recommended-bump';
import semver from 'semver';
import yargs from 'yargs';

const argv = process.argv.splice(2);

export interface Options {
  source: string;
}

const getNextVersion = async (options: Options): Promise<string> => {
  return new Promise((resolve, reject) => {
    const { source } = options;
    const packageJSON = path.resolve(source);

    if (!packageJSON) {
      reject(new Error('Could not find package.json'));
    }

    import(packageJSON).then(({ version, name }) => {
      conventionalRecommendedBump(
        {
          preset: 'angular',
        },
        async (err, release) => {
          if (err) {
            console.error('err');
            return;
          }

          const { releaseType } = release;

          const nextVersion: string = semver.inc(version, releaseType);

          resolve(`${name} next version: ${nextVersion}`);
        },
      );
    });
  });
};

const run = async () => {
  const options = yargs
    .strict(true)
    .scriptName('get-next-version')
    .example('$0', 'Print the next Standard Version.')
    .example(
      '$0 --source <source>',
      ['Pointing the script into the right direction'].join(' '),
    )
    .options({
      source: {
        alias: 's',
        describe: 'Path to the package.json of the package.',
        type: 'string',
        default: './package.json',
      },
      version: {
        alias: 'v',
      },
      help: {
        alias: 'h',
      },
    })
    .parse(argv);

  try {
    const version = await getNextVersion(options);
    console.info(version);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
