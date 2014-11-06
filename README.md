# interval

Repeat a command at a given interval, and aggregate its output.

```bash
npm install -g cli-interval
```

The following example outputs a random number to `stdout` every second.

```bash
interval -t 1s "echo \$RANDOM"
```

It will aggregates both `stdout` and `stderr` over time, and pipes them into its respective outputs.

## Arguments

- `--help` print the command usage
- `-t` specify the interval at which to run the command, e.g.
  - `-t 0.5` every 500 milliseconds
  - `-t 10` every 10 seconds
  - `-t 5s` every 5 seconds
  - `-t 2m` every 2 minutes
  - `-t 1h` every hour
