# calc-grpc
This is base on https://github.com/grpc-ecosystem/grpc-cloud-run-example

This packaged calculate gRPC client as a library, to hide the grpc proto loading, connecting server, ...etc details

# usage
```
const calculate = require('@tomyjwu/calc-grpc');
calculate(argv.server, argv.operation.toUpperCase(), argv.a, argv.b, argv.plaintext).then((value) => {
      console.log(value);
    }, (error) => {
      console.error(error);
    });
```

