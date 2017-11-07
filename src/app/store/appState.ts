export interface AppState {
  explorers: Explorer[];
  activeExplorer: Explorer;
}

export interface Explorer {
  path: string;
  items: ExplorerItem[];
}

export interface ExplorerItem {
  name: string;
  type: string;
}
