import * as cli from "build-utils/cli";
import {exec, spawn} from "build-utils/process";
import {enableLogging} from "build-utils/logger";

enableLogging();

cli.command("dev", dev);

cli.run();

async function dev(){
  await exec("./node_modules/.bin/tsc -p ./server/tsconfig.json");
  exec("./node_modules/.bin/tsc -p ./server/tsconfig.json -w");

  exec("./node_modules/.bin/nodemon ./server-out/main.js");
}
