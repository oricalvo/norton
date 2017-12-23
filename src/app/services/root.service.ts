import {AppStore} from "../store/appStore";
import {Injectable} from "@angular/core";
import {AppState, Explorer, ExplorerItem} from "../store/appState";
import {FSService} from "./fs.service";

@Injectable()
export class RootService {
  constructor(private appStore: AppStore, private fs: FSService){
  }

  async load(){
    const dirs = ["data", "ta"];

    const explorers = await Promise.all(dirs.map(this.getExplorer));

    this.appStore.update({
      explorers,
    })
  }

  private async getExplorer(dir: string): Promise<Explorer> {
    return {
      path: dir,
      items: await this.fs.getItems(dir)
    };
  }

  async changedir(explorer: Explorer, item: ExplorerItem) {
    this.appStore.update({
      explorers: UPDATE(explorer, await this.getExplorer(explorer.path));
    });
  }
}
