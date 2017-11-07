import { Component } from '@angular/core';
import {AppState} from "./store/appState";
import {AppStore} from "./store/appStore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appStore: AppStore){

  }

  get state(): AppState{
    return this.appStore.state;
  }
}
