
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your birth date (YYYY-MM-DD): ', (input) => {
  const birthDate = new Date(input);
  const today = new Date();

  if (isNaN(birthDate.getTime()) || birthDate > today) {
    console.log('Invalid date or future date. Use YYYY-MM-DD format.');
    rl.close();
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Approximate total days (365.25 days per year average)
  const totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  console.log(`Age: ${years} years, ${months} months, ${days} days`);
  console.log(`Approximate total days: ${totalDays} days`);
  rl.close();
});