import {createStore} from 'redux';
export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'CONG':
            return state + 1;
        case 'TRU':
            return state  - 1;
        case 'LAM_LAI':
            return 0;
        default:
            return state;
    }
}

let store = createStore(counter);
export default store;