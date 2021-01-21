import { React } from 'react'

import classes from './HistoryTable.module.css'

const HistoryTable = ({ history }) => {
    let rows = [];
    
    history.forEach((entry, index) => {
        const timestamp = entry.timestamp.slice(0, 10) + " " + entry.timestamp.slice(11, 19);
        rows.push(
            <tr key={entry.timestamp}>
                <td>{index + 1}</td>
                <td>{entry.operation}</td>
                <td>{entry.number1}</td>
                <td>{entry.number2}</td>
                <td>{entry.result}</td>
                <td>{timestamp}</td>
            </tr>
        );
    });

    return (
        <table className={classes.historyTable}>
            <thead>
                <tr>
                    <th>History</th>
                    <th>Operation</th>
                    <th>First number</th>
                    <th>Second number</th>
                    <th>Result</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default HistoryTable