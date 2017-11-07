import {AppState} from "./appState";
import {Store} from "./store";

export class AppStore extends Store<AppState>{
}

const appStore = new AppStore({
  explorers: null,
  activeExplorer: null,
});

export const APP_STORE_PROVIDER = {provide: AppStore, useValue: appStore};
