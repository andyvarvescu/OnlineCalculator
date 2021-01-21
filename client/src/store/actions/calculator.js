import * as actionTypes from './actionTypes'
import { calculate } from '../utility'

export const setFirstNumber = (firstNumber) => ({
    type: actionTypes.SET_FIRST_NUMBER,
    number: firstNumber
})

export const setSecondNumber = (secondNumber) => ({
    type: actionTypes.SET_SECOND_NUMBER,
    number: secondNumber
})

export const setOperation = (operation) => ({
    type: actionTypes.SET_OPERATION,
    operation: operation
})

export const changeCalculationType = () => ({ type: actionTypes.CHANGE_CALCULATION_TYPE })

const calculateResult = async (firstNumber, secondNumber, operation, serverCalculation) => {
    if (serverCalculation) {
        try {
            const response = await window.axios.get('/server_calculator.js', {
                params: {
                    firstNumber,
                    secondNumber,
                    operation
                }
            })

            return response.data
        }
        catch (err) {
            return err
        }
    }
    else {
        const result = calculate(+firstNumber, +secondNumber, operation)

        await window.axios.get('/server_calculator.js', {
            params: { firstNumber, secondNumber, operation, result }
        })

        return result
    }
}

export const setResult = (result) => {
    return {
        type: actionTypes.SET_RESULT,
        result
    }
}

export const getResult = () => {
    return async (dispatch, getState) => {
        const { firstNumber, secondNumber, operation, serverCalculation } = getState().calc
        const result = await calculateResult(firstNumber, secondNumber, operation, serverCalculation)

        console.log("response = ", Number(result))
        dispatch(setResult(result))
    }
}