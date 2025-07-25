
function summation(a, b) {
    return a + b;
}
function getFullName(first, middle, last) {
  if (first === undefined) first = "";
  if (middle === undefined) middle = "";
  if (last === undefined) last = "";
  return first + middle + last ;
}
function getFactorial(n) {
  if (n < 0) return "Invalid input";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}
function calculateGrade(degree) {
  if (degree >= 90) return "Excellent";
  else if (degree >= 80) return "Very Good";
  else if (degree >= 65) return "Good";
  else return "Fail";
}
