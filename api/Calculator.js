module.exports = class Calculator {
    calculateResult (nr1, nr2, operation) {
        let result = 0;
    
        switch (operation) {
            case "Addition":
                result = (nr1) + (nr2);
                break;

            case "Subtraction":
                result = (nr1) - (nr2);
                break;

            case "Multiplication":
                result = (nr1) * (nr2);
                break;

            case "Division":
                result = (nr1) / (nr2);
                break;

            case "Power":
                result = Math.pow(nr1, nr2);
                break;
        }
        return result;
    }
}