import {AppStore} from "../store/appStore";
import {Injectable} from "@angular/core";
import {AppState, Explorer} from "../store/appState";
import {FSService} from "./fs.service";

@Injectable()
export class RootService {
  constructor(private appStore: AppStore, private fs: FSService){
  }

  async loadExplorers(){
    const explorer1: Explorer = {
      path: "/data",
      items: await this.fs.getItems("/data")
    };

    const explorers: Explorer[] = [
      {
        path: "/data",
        items: [],
      },
      {
        path: "/home/ori",
        items: [],
      },
    ]

    this.appStore.update({
      explorers,
    })
  }
}
