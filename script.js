/* Get and validate input values */
function getValues() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    // Check empty input
    if (a === "" || b === "") {
        alert("Please enter both numbers.");
        return null;
    }

    a = parseFloat(a);
    b = parseFloat(b);

    // Check invalid numbers
    if (isNaN(a) || isNaN(b)) {
        alert("Invalid input. Please enter valid numbers.");
        return null;
    }

    return [a, b];
}

/* Display result */
function displayResult(value) {
    document.getElementById("result").innerText = value;
}

/* Arithmetic Operations */

function add() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;
    displayResult("Addition: " + (a + b));
}

function subtract() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;
    displayResult("Subtraction: " + (a - b));
}

function multiply() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;
    displayResult("Multiplication: " + (a * b));
}

function divide() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;

    if (b === 0) {
        alert("Cannot divide by zero.");
        return;
    }

    displayResult("Division: " + (a / b));
}

/* Assignment Operators  */

function assignment() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;

    let result = a;   // =
    result += b;      // +=

    displayResult("Assignment (a += b): " + result);
}

/* Comparison / Relational */

function compare() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;

    let output =
        "a == b : " + (a == b) + "\n" +
        "a === b : " + (a === b) + "\n" +
        "a > b : " + (a > b) + "\n" +
        "a < b : " + (a < b) + "\n" +
        "a >= b : " + (a >= b) + "\n" +
        "a <= b : " + (a <= b);

    displayResult(output);
}

/* Logical Operators     */

function logical() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;

    let output =
        "(a > 0 && b > 0) : " + (a > 0 && b > 0) + "\n" +
        "(a > 0 || b > 0) : " + (a > 0 || b > 0) + "\n" +
        "!(a > b) : " + (!(a > b));

    displayResult(output);
}

/* Reset Function        */

function resetCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result:";
}