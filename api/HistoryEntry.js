module.exports = class HistoryEntry {
    constructor(operation, number1, number2, result, timestamp) {
        this.operation = operation;
        this.number1 = number1;
        this.number2 = number2;
        this.result = result;
        this.timestamp = timestamp;
    }
}