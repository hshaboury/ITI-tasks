// 1
let numbers = [23, 87, 12, 45, 99, 4, 66, 35, 72];

// sort ascending
let ascNums = [...numbers].sort((a, b) => a - b);

// sort descending
let desnums = [...numbers].sort((a, b) => b - a);

// filter nums <=50
let greaterThan50 = numbers.filter(num => num > 50);

// min and max in the arr
let maxNum = Math.max(...numbers);
let minNum = Math.min(...numbers);
console.log(maxNum);
console.log(minNum);