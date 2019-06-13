// ----- REDUCERS ------

import types from './types';

const INITIAL_STATE = {
    listName: 'HistoryOfActions',
    list: [
        {
            name: 'baton',
            price: '2',
            date: {
                year: 2019,
                month: 5,
                day: 15,
            },
            get: "-"
        },
        {
            name: 'wypłata',
            price: '2000',
            date: {
                year: 2019,
                month: 5,
                day: 25
            },
            get: '+'
        }
    ]
}
const actionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_ACTION: // ----- dodanie akcji -----
            return {
                ...state, list: [...state.list, action.item]
            }
        default: // ----- zwraca dane bez zmian -----
            return state;

    }
}

export default actionsReducer;