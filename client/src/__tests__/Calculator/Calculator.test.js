import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Calculator from '../../containers/Calculator'
import { changeCalculationType, getResult, setResult, deleteHistory } from '../../store/actions/calculator'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
    calc: {
        firstNumber: '3',
        secondNumber: '24',
        operation: 'Multiplication',
        serverCalculation: false,
        result: 0
    }
}
const store = mockStore(initialState)

const wrapper = mount(
    <Provider store={store}>
        <Calculator />
    </Provider>
)

describe("The Calculator component dispatching async actions", () => {
    it("dispatches the right action when pressing Result button", (done) => {
        wrapper.find("Result").find("button").props().onClick()
        .then(() => {
            expect(store.getActions()).toContainEqual(setResult(72))
            done()
        })
    })
})