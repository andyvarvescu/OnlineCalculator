import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    firstNumber: '0',
    secondNumber: '0',
    operation: "Addition",
    serverCalculation: true,
    result: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FIRST_NUMBER:
            return updateObject(state, { firstNumber: action.number })

        case actionTypes.SET_SECOND_NUMBER:
            return updateObject(state, { secondNumber: action.number })

        case actionTypes.SET_OPERATION:
            return updateObject(state, { operation: action.operation })

        case actionTypes.CHANGE_CALCULATION_TYPE:
            return updateObject(state, { serverCalculation: !state.serverCalculation })

        case actionTypes.SET_RESULT:
            return updateObject(state, { result: action.result })

        default: return state
    }
}

export default reducer