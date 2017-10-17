import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/types'
import createReducer from '../lib/createReducer'

export const drawer = createReducer({ opened : false }, {
  [OPEN_DRAWER](state, action) {
    const opened = true;
    return { ...state, opened };
  },
  [CLOSE_DRAWER](state, action) {
    const opened = false;
    return { ...state, opened };
 }
})
