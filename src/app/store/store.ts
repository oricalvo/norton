export class Store<T> {
    private _state: T;

    constructor(initialState: T) {
        this._state = initialState;
    }

    get state(): T {
        return this._state;
    }

    update(changes: Partial<T>) {
        const actions = [];

        for (const key in changes) {
            let action: Action = <any>changes[key];
            if (!isAction(action)) {
                action = update(action);
            }

            apply(this._state, key, action);
        }

        Object.assign(this._state, changes);
    }
}

function apply(state: any, key: string, action: Action) {
    const value = state[key];

    if (action.type == 'replace') {
        applyReplace(value, action.payload.oldValue, action.payload.newValue);
    }
    else if (action.type == 'update') {
    }
    else {
        throw new Error('Unknown action type');
    }
}

function applyReplace(arr: any[], oldValue, newValue) {
    if (!Array.isArray(arr)) {
        throw new Error('replace cannot be used with non array value');
    }

    const index = arr.findIndex(oldValue);
    if (index != -1) {
        arr[index] = newValue;
    }
}

export interface Action {
    type: string;
    payload: any;
}

export function isAction(obj) {
    return obj.hasOwnProperty('type') && obj.hasOwnProperty('payload');
}

export function replace(oldValue, newValue): any {
    return {
        type: 'replace',
        payload: {
            oldValue,
            newValue,
        }
    };
}

export function update(value): Action {
    return {
        type: 'update',
        payload: {
            value,
        }
    };
}
