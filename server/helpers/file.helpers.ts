import * as fs from "fs";

export function readdir(path: string): Promise<string[]> {
  return new Promise((resolve, reject)=> {
    fs.readdir(path, function(err, res) {
      if(err) {
        reject(err);
        return;
      }

      resolve(res);
    });
  });
}
