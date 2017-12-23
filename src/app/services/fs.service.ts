import {Injectable} from "@angular/core";
import {ExplorerItem} from "../store/appState";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FSService {
  constructor(private http: HttpClient){
  }

  getItems(path: string): Promise<ExplorerItem[]> {
    return this.http.get<ExplorerItem[]>("/api/items/" + path).toPromise();
  }
}
