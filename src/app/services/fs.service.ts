import {AppStore} from "../store/appStore";
import {Injectable} from "@angular/core";
import {AppState, Explorer, ExplorerItem} from "../store/appState";

@Injectable()
export class FSService {
  constructor(){
  }

  getItems(path: string): Promise<ExplorerItem[]> {
    return Promise.resolve([
      {name: "1", type: "file"},
    ])
  }
}
