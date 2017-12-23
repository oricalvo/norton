import * as cli from "build-utils/cli";
import {exec, spawn} from "build-utils/process";
import {enableLogging} from "build-utils/logger";

enableLogging();

cli.command("dev", dev);
cli.command("server", runServer);
cli.command("client", runClient);

cli.run();

async function dev(){
  await runServer();
  await runClient();
}

async function runServer() {
  await exec("./node_modules/.bin/tsc -p ./server/tsconfig.json");

  exec("./node_modules/.bin/nodemon ./server-out/main.js");

  exec("./node_modules/.bin/tsc -p ./server/tsconfig.json -w");
}

async function runClient() {
  exec("ng serve --open --proxy-config proxy.conf.json");
}
