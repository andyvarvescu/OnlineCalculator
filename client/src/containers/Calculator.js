import React, { Component } from 'react'
import { connect } from 'react-redux'

import CalculatorBox from '../components/Calculator/CalculatorBox'
import { changeCalculationType, getResult, deleteHistory } from '../store/actions/'

class Calculator extends Component {
    render() {
        const {
            serverCalculation, changeCalculationType,
            result, getResult, deleteHistory
        } = this.props

        return (
            <CalculatorBox
                serverCalculation={serverCalculation}
                onCalculationTypeChange={changeCalculationType}
                result={result}
                onResultClick={getResult}
                onDeleteHistory={deleteHistory}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    serverCalculation: state.calc.serverCalculation,
    result: state.calc.result
})

const mapDispatchToProps = {
    changeCalculationType,
    getResult,
    deleteHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)