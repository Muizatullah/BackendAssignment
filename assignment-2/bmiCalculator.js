// bmi.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter weight (kg): ', (weight) => {
  rl.question('Enter height (m): ', (height) => {
    weight = parseFloat(weight);
    height = parseFloat(height);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      console.log('Invalid input. Enter positive numbers.');
      rl.close();
      return;
    }
    
    const bmi = weight / (height * height);
    let category;
    
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
    
    console.log(`BMI: ${bmi.toFixed(1)}`);
    console.log(`Category: ${category}`);
    rl.close();
  });
});