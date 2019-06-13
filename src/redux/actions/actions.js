// ----- akcje ----- 

import types from './types';

const add = item => ({
    type: types.ADD_ACTION, item
})

export default {
    add
}