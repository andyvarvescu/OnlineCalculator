import classes from './Result.module.css'

const Result = ({ result, onResultClick }) => (
    <div>
        <button
            className={classes.resultButton}
            onClick={onResultClick}
        >
            Result :
        </button>

        <div className={classes.result}>
            {result}
        </div>
    </div>
)

export default Result