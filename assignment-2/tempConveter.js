// convert.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter temperature (e.g., 25C or 77F): ', (input) => {
  input = input.trim().toUpperCase();
  
  if (input.endsWith('C')) {
    const celsius = parseFloat(input);
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C = ${fahrenheit.toFixed(1)}°F`);
  } else if (input.endsWith('F')) {
    const fahrenheit = parseFloat(input);
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F = ${celsius.toFixed(1)}°C`);
  } else {
    console.log('Invalid format. Use number + C or F (e.g., 25C or 77F)');
  }
  
  rl.close();
});