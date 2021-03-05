import React, { Component } from 'react'
import { connect } from 'react-redux'

import CalculatorBox from '../components/Calculator/CalculatorBox'
import { changeCalculationType, getResult, deleteHistory } from '../store/actions/'

class Calculator extends Component {
    render() {
        const {
            firstNumber, secondNumber, operation, 
            serverCalculation, changeCalculationType,
            result, getResult, deleteHistory
        } = this.props

        return (
            <CalculatorBox
                serverCalculation={serverCalculation}
                onCalculationTypeChange={changeCalculationType}
                result={result}
                onResultClick={() => getResult(firstNumber, secondNumber, operation, serverCalculation)}
                onDeleteHistory={deleteHistory}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    firstNumber: state.calc.firstNumber, 
    secondNumber: state.calc.secondNumber, 
    operation: state.calc.operation, 
    serverCalculation: state.calc.serverCalculation,
    result: state.calc.result
})

const mapDispatchToProps = {
    changeCalculationType,
    getResult,
    deleteHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)