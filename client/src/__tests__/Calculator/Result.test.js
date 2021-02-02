import React from 'react'
import Result from '../../components/Calculator/Result'
import classes from '../../components/Calculator/Result.module.css'

describe("Result button rendering", () => {
    const resultButton = shallow(<Result result={5} />)

    it("must have the right button name", () => {
        const buttonName = resultButton.find("button").text()
        expect(buttonName).toBe("Result :")
    })

    it("must display the value received as prop", () => {
        const result = resultButton.find(`div.${classes.result}`).text()
        expect(result).toBe("5")
    })
})
