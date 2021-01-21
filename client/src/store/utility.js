export const updateObject = (oldObject, newProperties) => {
    return {
        ...oldObject,
        ...newProperties
    }
}

export const calculate = (firstNumber, secondNumber, operation) => {
    let result

    switch (operation) {
        case "Addition":
            result = (firstNumber) + (secondNumber);
            break

        case "Subtraction":
            result = (firstNumber) - (secondNumber);
            break

        case "Multiplication":
            result = (firstNumber) * (secondNumber);
            break

        case "Division":
            result = (firstNumber) / (secondNumber);
            break

        case "Power":
            result = Math.pow(firstNumber, secondNumber);
            break
        
        default: break
    }

    return result
}