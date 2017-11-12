import * as express from "express";
import {logger} from "./logger";

const app = express();

app.get("/api/items", function(req, res){
  const path = req.query.path;
  if(!path){
    res.status(400);
    res.end();
  }

  res.json({});
});

app.listen(3000, function(){
  logger.info("Server is running");
});
