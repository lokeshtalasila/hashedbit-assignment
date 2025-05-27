// 1. Display even numbers from 1 to 100

function displayEvenNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// displayEvenNumbers();

// 2. Function to add, subtract, multiply, or divide using switch statement
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}

// Example usage
console.log(calculate(10, 5, '+'));  // 15
console.log(calculate(10, 5, '-'));  // 5
console.log(calculate(10, 5, '*'));  // 50
console.log(calculate(10, 5, '/'));  // 2


// 3. Function findTax() using switch statement
function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      return "Invalid salary";
  }

  let taxAmount = salary * taxRate;
  return `Salary: ₹${salary}, Tax: ₹${taxAmount}`;
}

// Example usage
console.log(findTax(450000));    // 0% tax
console.log(findTax(750000));    // 10% tax
console.log(findTax(1200000));   // 20% tax
console.log(findTax(1600000));   // 30% tax



// 4. Sum of the products of corresponding digits
function sumOfDigitProducts(n1, n2) {
  let s1 = n1.toString().split('').reverse();
  let s2 = n2.toString().split('').reverse();

  let length = Math.max(s1.length, s2.length);
  let sum = 0;

  for (let i = 0; i < length; i++) {
    let digit1 = parseInt(s1[i] || 0);
    let digit2 = parseInt(s2[i] || 0);
    sum += digit1 * digit2;
  }

  return sum;
}

// Example usage
console.log(sumOfDigitProducts(6, 34));     // Output: 24
console.log(sumOfDigitProducts(123, 456));  // Output: 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32
