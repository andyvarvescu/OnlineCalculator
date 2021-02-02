import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { setFirstNumber, setSecondNumber, setOperation } from '../../store/actions/'
import Operation from '../../components/Calculator/Operation'
import Input from '../../components/Calculator/Input'
import toJSON from 'enzyme-to-json'

describe("The Operation component connected to redux", () => {
    const mockStore = configureStore([])

    const initialState = {
        calc: {
            firstNumber: '0',
            secondNumber: '0',
            operation: "Addition"
        }
    }
    const store = mockStore(initialState)

    const operation = mount(
        <Provider store={store}>
            <Operation operation={"Addition"} />
        </Provider>
    )

    it("must render with give state from redux store", () => {
        expect(toJSON(operation)).toMatchSnapshot()
    })

    it("must display the value 0 for the first number", () => {
        const firstNumber = operation.find("Input").at(0).prop("value")
        expect(firstNumber).toBe("0")
    })

    it("must display the value 0 for the second number", () => {
        const secondNumber = operation.find("Input").at(1).prop("value")
        expect(secondNumber).toBe("0")
    })

    it("must display Addition as the default operation value", () => {
        const selectValue = operation.find("select").prop("value")
        expect(selectValue).toBe("Addition")
    })
})
