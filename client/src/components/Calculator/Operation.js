import { connect } from 'react-redux'
import { setFirstNumber, setSecondNumber, setOperation } from '../../store/actions'
import Input from './Input'

const Operation = (props) => {
    const {
        firstNumber, secondNumber, operation,
        setFirstNumber, setSecondNumber, setOperation,
    } = props

    return (
        <div>
            <Input
                label="First number:"
                type="text"
                name="firstNumber"
                value={firstNumber}
                onChange={setFirstNumber}
            />
            <Input
                label="Second number:"
                type="text"
                name="secondNumber"
                value={secondNumber}
                onChange={setSecondNumber}
            />

            <strong>Operation :</strong>
            <select
                id="dropdown1"
                onChange={(e) => setOperation(e.target.value)}
                value={operation}
            >
                <option value="Addition">Add (+)</option>
                <option value="Subtraction">Subtract (-)</option>
                <option value="Multiplication">Multiply (*)</option>
                <option value="Division">Divide (/)</option>
                <option value="Power">x to the y power (x^y)</option>
            </select>
        </div>
    )
}

const mapStateToProps = (state) => ({
    firstNumber: state.calc.firstNumber,
    secondNumber: state.calc.secondNumber,
    operation: state.calc.operation
})

const mapDispatchToProps = ({
    setFirstNumber,
    setSecondNumber,
    setOperation
})

export default connect(mapStateToProps, mapDispatchToProps)(Operation)