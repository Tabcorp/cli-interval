#!/usr/bin/env node

var ms = require('ms');
var exec = require('child_process').exec;

var cli = require('optimist')
  .usage('Repeat a command at a given interval\nUsage: $0 -t [interval] "command -args"')
  .describe('t', 'Interval at which to run, either in seconds or as a string (5s, 10m, 1h...)')
  .default({ t: 1 });

function millis(val) {
  return (typeof val === 'string') ? ms(val) : val * 1000;
}

var command = cli.argv._[0];
var interval = millis(cli.argv.t);

if (cli.argv.help || interval === 0 || command === undefined) {
  return cli.showHelp();
}

function run() {
  var child = exec(command, function (error, stdout, stderr) {
    setTimeout(run, interval);
  });
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
}

run();
