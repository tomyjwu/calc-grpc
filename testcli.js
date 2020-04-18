const calculate = require('./index');
function testCalc() {
    const argv = require('yargs')
      .option({
        server: {
          describe: 'The address of the calculator server.',
          demandOption: true,
          type: 'string'
        },
        operation: {
          describe: 'The operation to perform',
          demandOption: true,
          choices: ['add', 'subtract'],
          type: 'string'
        },
        a: {
          describe: 'The first operand',
          demandOption: true,
          type: 'number'
        },
        b: {
          describe: 'The second operand',
          demandOption: true,
          type: 'number'
        },
        plaintext: {
          alias: 'k',
          describe: 'When set, establishes a plaintext connection. Useful for debugging locally.',
          type: 'boolean'
        }
      }).argv;
    calculate(argv.server, argv.operation.toUpperCase(), argv.a, argv.b, argv.plaintext).then((value) => {
      console.log(value);
    }, (error) => {
      console.error(error);
    });
  }
  testCalc();