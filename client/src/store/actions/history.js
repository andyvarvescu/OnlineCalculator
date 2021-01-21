import * as actionTypes from './actionTypes'

export const fetchHistorySuccess = (history) => ({
    type: actionTypes.FETCH_HISTORY_SUCCESS,
    history
})


export const deleteHistory = () => {
    return async (dispatch) => {
        try {
            await window.axios.get('/server_calculator.js/delHistory')

            dispatch({ type: actionTypes.DELETE_HISTORY })
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
            const response = await window.axios.get('/server_calculator.js/getHistory')

            dispatch(fetchHistorySuccess(response.data))
        }
        catch (err) {
            console.log("error received = ", err)
            return err
        }
    }
}