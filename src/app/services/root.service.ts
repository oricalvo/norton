import {AppStore} from "../store/appStore";
import {Injectable} from "@angular/core";
import {AppState, Explorer} from "../store/appState";

@Injectable()
export class RootService {
  constructor(private appStore: AppStore){

  }

  loadExplorers(){
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
