import * as actionTypes from './actionTypes'
import axios from '../../axiosInstance'

export const fetchHistorySuccess = (history) => ({
    type: actionTypes.FETCH_HISTORY_SUCCESS,
    history
})

export const deleteHistorySuccess = () => ({
    type: actionTypes.DELETE_HISTORY_SUCCESS
})

export const deleteHistory = () => {
    return async (dispatch) => {
        try {
            await axios.get('/server_calculator.js/delHistory')

            return dispatch(deleteHistorySuccess())
        }
        catch (err) {
            console.log("error received = ", err)
            return err
        }
    }
}

export const fetchHistory = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/server_calculator.js/getHistory')

            dispatch(fetchHistorySuccess(response.data))
        }
        catch (err) {
            console.log("error received = ", err)
            return err
        }
    }
}