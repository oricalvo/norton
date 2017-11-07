import {Component, Input, OnInit} from '@angular/core';
import {Explorer} from "../store/appState";

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
})
export class ExplorerComponent implements OnInit {
  @Input() explorer: Explorer;

  constructor() { }

  ngOnInit() {
  }
}
