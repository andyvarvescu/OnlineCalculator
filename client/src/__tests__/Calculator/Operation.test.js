import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { setFirstNumber, setSecondNumber, setOperation } from '../../store/actions/'
import Operation from '../../components/Calculator/Operation'
import toJSON from 'enzyme-to-json'

const middlewares = []
const mockStore = configureStore(middlewares)

const initialState = {
    calc: {
        firstNumber: '0',
        secondNumber: '0',
        operation: "Addition"
    }
}
const store = mockStore(initialState)

const wrapper = mount(
    <Provider store={store}>
        <Operation />
    </Provider>
)

describe("The Operation component rendering", () => {
    it("renders with given state from redux store", () => {
        expect(toJSON(wrapper)).toMatchSnapshot()
    })

    it("displays the value from state for the first number", () => {
        const firstNumber = wrapper.find("Input").at(0).prop("value")
        expect(firstNumber).toBe(initialState.calc.firstNumber)
    })

    it("displays the value from state for the second number", () => {
        const secondNumber = wrapper.find("Input").at(1).prop("value")
        expect(secondNumber).toBe(initialState.calc.secondNumber)
    })

    it("displays the value from state as the default operation value", () => {
        const selectValue = wrapper.find("select").prop("value")
        expect(selectValue).toBe(initialState.calc.operation)
    })
})

describe("The Operation component dispatching the right actions", () => {
    const expectedActions = [
        setFirstNumber("23"),
        setSecondNumber("71"),
        setOperation("Addition")
    ]

    it("dispatches the right action when changing first number", () => {
        wrapper.find("Operation").props().setFirstNumber("23")
        expect(store.getActions()).toContainEqual(expectedActions[0])
    })

    it("dispatches the right action when changing second number", () => {
        wrapper.find("Operation").props().setSecondNumber("71")
        expect(store.getActions()).toContainEqual(expectedActions[1])
    })

    it("dispatches the right action when changing operation", () => {
        wrapper.find("Operation").props().setOperation("Addition")
        expect(store.getActions()).toContainEqual(expectedActions[2])
    })
})
