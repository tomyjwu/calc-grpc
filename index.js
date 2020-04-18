// The package @grpc/grpc-js can also be used instead of grpc here
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
  __dirname + '/calculator.proto',
  {keepCase: true,
   longs: String,
   enums: String,
   defaults: true,
   oneofs: true
  });
const calculatorProto = grpc.loadPackageDefinition(packageDefinition);

function calculate(serverAddress, operation, a, b, plaintext) {
  let credentials;
  if (plaintext) {
    credentials = grpc.credentials.createInsecure();
  } else {
    credentials = grpc.credentials.createSsl();
  }
  const calculator = new calculatorProto.Calculator(serverAddress, credentials);
  const binaryOperation = {
    operation: operation,
    first_operand: a,
    second_operand: b
  }
  return new Promise((resolve, reject) => {
    calculator.calculate(binaryOperation, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.result);
      }
    })
  })
}


module.exports = calculate;

