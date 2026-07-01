// Get user input
const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

// Validate numbers
if (isNaN(num1) || isNaN(num2)) {
    console.log("❌ Please enter valid numbers.");
    process.exit();
}

// Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero.";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

// Perform operation
switch (operation.toLowerCase()) {
    case "add":
        console.log(`Result: ${add(num1, num2)}`);
        break;

    case "subtract":
        console.log(`Result: ${subtract(num1, num2)}`);
        break;

    case "multiply":
        console.log(`Result: ${multiply(num1, num2)}`);
        break;

    case "divide":
        console.log(`Result: ${divide(num1, num2)}`);
        break;

    case "modulus":
        console.log(`Result: ${modulus(num1, num2)}`);
        break;

    default:
        console.log("❌ Invalid operation!");
        console.log("Available operations:");
        console.log("add");
        console.log("subtract");
        console.log("multiply");
        console.log("divide");
        console.log("modulus");
}