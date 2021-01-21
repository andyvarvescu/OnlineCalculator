import { React } from 'react'

import Operation from './Operation'
import Result from './Result'
import classes from './CalculatorBox.module.css'

const CalculatorBox = (props) => {
    const {
        serverCalculation, onCalculationTypeChange, 
        result, onResultClick, onDeleteHistory
    } = props

    return (
        <div className={classes.calculatorBox}>
            <Operation />

            <label>
                <input
                    type="checkbox"
                    id="serverCalculation"
                    checked={serverCalculation}
                    onChange={onCalculationTypeChange}
                />
                Calculate using server
            </label>

            <Result
                result={result}
                onResultClick={onResultClick}
            />

            <button
                id="deleteHistory"
                className={classes.deleteHistory}
                onClick={onDeleteHistory}
            >
                Delete history
            </button>
        </div>
    )
}

export default CalculatorBox