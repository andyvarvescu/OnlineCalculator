import * as actionTypes from './actionTypes'
import { calculate } from '../utility'
import axios from '../../axiosInstance'

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
            const response = await axios.get('/server_calculator.js', {
                params: { firstNumber, secondNumber, operation }
            })

            return response.data.result
        }
        catch (err) {
            return err
        }
    }
    else {
        const result = calculate(+firstNumber, +secondNumber, operation)

        await axios.get('/server_calculator.js', {
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

export const getResult = (firstNumber, secondNumber, operation, serverCalculation) => {
    return async (dispatch) => {
        const result = await calculateResult(firstNumber, secondNumber, operation, serverCalculation)

        return dispatch(setResult(result))
    }
}