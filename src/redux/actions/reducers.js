// ----- REDUCERS ------

import types from './types';

const INITIAL_STATE = {
    listName: 'HistoryOfActions',
    summary: {
        all: 0,

    },
    list: [
    ]
}
const actionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // ----- dodanie akcji -----

        case types.ADD_ACTION: 
            let money= action.item.get==='+'?action.item.price:-action.item.price;
            state.summary.all += Number(money);
            return {
                ...state, list: [...state.list, action.item]
            }
            
        // ----- zwraca dane bez zmian -----

        default: 
            return state;

    }
}

export default actionsReducer;