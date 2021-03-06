import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import {APP_STORE_PROVIDER} from "./store/appStore";
import {RootService} from "./services/root.service";
import {FSService} from "./services/fs.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    APP_STORE_PROVIDER,
    RootService,
    FSService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(rootService: RootService){
    rootService.load();
  }
}
