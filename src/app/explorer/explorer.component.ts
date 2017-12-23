import {Component, Input, OnInit} from '@angular/core';
import {Explorer, ExplorerItem} from "../store/appState";
import {RootService} from "../services/root.service";

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  @Input() explorer: Explorer;

  constructor(private rootService: RootService) { }

  ngOnInit() {
  }

  onActivate(item: ExplorerItem) {
    this.rootService.changedir(this.explorer, item);
  }
}
