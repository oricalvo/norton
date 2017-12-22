import * as express from "express";
import {logger} from "./logger";
import {Express, Request} from "express";
import {readdir} from "./helpers/file.helpers";
import {patch} from "express-promise-patch";

const app: Express = patch(express());

app.get("/api/items/*", async function(req: Request, res){
  const path = req.params[0];
  if(!path){
    res.status(400);
    return;
  }

  // return path;
  const items = await readdir("c:/" + path);
  return items;
});

app.listen(3000, function(){
  logger.info("Server is running");
});
