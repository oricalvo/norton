import * as express from "express";
import {logger} from "./logger";
import {Express, Request} from "express";
import {readdir} from "./helpers/file.helpers";
import {patch} from "express-promise-patch";
import {getStat} from "build-utils/fs";
import * as path from "path";

const app: Express = patch(express());

app.get("/api/items/*", async function(req: Request, res) {
  const dir = req.params[0];
  if (!dir) {
    res.status(400);
    return;
  }

  // return path;
  const root = "c:/" + dir;
  const items = await readdir(root);

  return Promise.all(items.map(async item => {
    const stat = await getStat(path.join(root, item));
    return {
      name: item,
      type: stat.isDirectory() ? "dir" : "file"
    };
  }));
});

app.listen(3000, function(){
  logger.info("Server is running");
});
