import React from 'react'
import CalculatorBox from '../../components/Calculator/CalculatorBox'

it("must have the right button name", () => {
    const calculatorBox = shallow(<CalculatorBox />)
    const buttonName = calculatorBox.find("button").text()
    expect(buttonName).toBe("Delete history")
})