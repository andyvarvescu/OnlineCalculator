import React from 'react'
import CalculatorBox from '../../components/Calculator/CalculatorBox'

const wrapper = shallow(<CalculatorBox serverCalculation={true} />)

describe("The component rendering", () => {
    it("displays the right label for the server calculation checkbox", () => {
        const label = wrapper.find("label").text()
        expect(label).toBe("Calculate using server")
    })

    it("uses the right value for the server calculation checkbox", () => {
        const checkbox = wrapper.find("input").prop("checked")
        expect(checkbox).toBe(true)
    })

    it("displays the right button name for deleting history", () => {
        const buttonName = wrapper.find("button").text()
        expect(buttonName).toBe("Delete history")
    })
})
