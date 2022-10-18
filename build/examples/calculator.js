"use strict";
const calculator = (a, b, op) => {
    if (op === "multiplicacion")
        return a * b;
    if (op === "suma")
        return a + b;
    if (op === "resta")
        return a - b;
    if (op === "division") {
        if (a === 0 || b === 0)
            throw new Error("No se puede dividor por 0");
        return a / b;
    }
    throw new Error("Operation is not valid");
};
try {
    console.log(calculator(2, 2, "multiplicacion"));
}
catch (error) {
    console.log("Algo salio mal", error);
}
