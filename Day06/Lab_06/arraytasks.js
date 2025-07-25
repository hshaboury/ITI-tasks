
var numbers = [20, 5, 40, 20, 30 , 90, 8];
console.log("Original array:", numbers);

//Remove duplicates
//native
function removeDuplicates (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
var noDup1 = removeDuplicates (numbers);
console.log("No duplicates (native):", noDup1);

//built-in
var noDup2 = numbers.filter((value, index, self) => {    //بنقارن: هل ده أول ظهور للعنصر؟ لو آه → نسمحله يمر
  return self.indexOf(value) === index;                  // بعدين لما يجى عنصر متكرر فى الاندكس فمش ب === فبيتم استبعاده                                      
});
console.log("No duplicates (built-in):", noDup2);

// ---------------------------------------------------------------------------------------

//Sorting ascending & descending 
//native (Bubble sort)
function sortAscending(arr) {
  var sorted = arr.slice();                             // نعمل نسخة من المصفوفة الأصلية عشان ما نغيرهاش
  for (var i = 0; i < sorted.length; i++) {     
    for (var j = 0; j < sorted.length - 1; j++) {       // -1 عشان ما نخرجش بره الاندكس
      if (sorted[j] > sorted[j + 1]) {          
        var temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  return sorted;
}
var asc1 = sortAscending(noDup1);
console.log("Ascending (native):", asc1);
var desc1 = asc1.slice().reverse();                     //   asc بنعكس المصفوفة بعد ما نرتبها 
console.log("Descending (native):", desc1);

//built-in
var asc2 = noDup2.slice().sort((a, b) => a - b);
console.log("Ascending (built-in):", asc2);

var desc2 = noDup2.slice().sort((a, b) => b - a);
console.log("Descending (built-in):", desc2);

// ---------------------------------------------------------------------------------------

// Filtering numbers greater than 50 
//native
function filtering (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 50) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log("Filtered > 50 (native):", filtering (numbers));

//built-in
var greaterThan50 = numbers.filter(num => num > 50);
console.log("Filtered > 50 (built-in):", greaterThan50);

// ---------------------------------------------------------------------------------------
//Max & Min 
//native
function getMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function getMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log("Max (native):", getMax(numbers));
console.log("Min (native):", getMin(numbers));

//Built-in
console.log("Max (Math):", Math.max(...numbers));
console.log("Min (Math):", Math.min(...numbers));

// ---------------------------------------------------------------------------------------
//Compute the sum and product of an array of integers
function sum(array) {return eval(array.join("+"));}
console.log(sum(numbers))

function product(array) {return eval(array.join("*"));}
console.log(product(numbers))

function sum2() {
    var array = []
    for (i = 0; i < arguments.length; i++)
    {
        array.push(arguments[i]);
    }
    return eval(array.join("+"));
}
console.log(sum2(...numbers));

function product2() {
  var array = [];
  for (i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }
  return eval(array.join("*"));
}
console.log(product2(...numbers));

//get the month name from a particular date.
var newDate = new Date("29 sep 2022");
console.log(newDate.toDateString());

newDate.getMonth();
function month(date) {
  let monthName = date.toDateString().split(" ")[1]; 
  console.log(monthName);
}

month(newDate);