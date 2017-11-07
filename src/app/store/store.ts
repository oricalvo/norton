export class Store<T>{
  private _state: T;

  constructor(initialState: T){
    this._state = initialState;
  }

  get state(): T {
    return this._state;
  }

  update(changes: Partial<T>){
    Object.assign(this._state, changes);
  }
}
