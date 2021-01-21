import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    history: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HISTORY_SUCCESS:
            return updateObject(state, { history: action.history })

        case actionTypes.DELETE_HISTORY:
            return { history: [] }
            
        default:
            return state
    }
}

export default reducer