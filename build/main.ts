import * as cli from "build-utils/cli";
import {spawn} from "build-utils/process";

cli.command("dev", dev);

cli.run();

function dev(){
  spawn("./node_modules/bin/tsc -p ./server/tsconfig.json")
}
