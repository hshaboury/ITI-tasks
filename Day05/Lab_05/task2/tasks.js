//1
var mystr = prompt("Enter a string to count 'e':");
var count = 0;

for (var i = 0; i < mystr.length; i++) {
  if (mystr[i] === 'e') {
    count++;
  }
}
console.log( "Number of 'e' characters:" + count);



//2
var str = prompt("Enter a string to check if it is a palindrome:");
var isCaseSensitive = confirm("Do you want to consider case sensitivity?");

var originalword;
if (isCaseSensitive) {
  originalword = str;
} else {
  originalword = str.toLowerCase();
}

var reverseword = "";
for (var i = originalword.length - 1; i >= 0; i--) {
  reverseword += originalword.charAt(i);
}

if (originalword === reverseword) {
  console.log("The string IS a palindrome.");
} else {
  console.log("The string is NOT a palindrome.");
}
