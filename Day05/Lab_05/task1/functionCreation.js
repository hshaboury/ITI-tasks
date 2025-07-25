//1
function CapitalizeFn(str) {
  var words = str.split(" "); 
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
//2
function SortFn(str) {
  var sorted = "";
  for (var char of 'abcdefghijklmnopqrstuvwxyz') {
    for (var i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === char) {
        sorted += str[i];
      }
    }
  }
  return sorted;
}
//3
function findLongestFn(str) {
  var words = str.split(" ");
  var longest = "";
  for (var word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
//4
function swapCaseFn(str) {
  var swapped = "";
  for (var char of str) {
    if (char === char.toUpperCase()) { swapped += char.toLowerCase();}
    else { swapped += char.toUpperCase();}
    }
  return swapped;
}

//5
function getUniqueFn(str) {
  var unique = "";
  for (var i = 0; i < str.length; i++) {
    if (!unique.includes(str[i])) {
      unique += str[i];
    }
  }
  return unique;
}

//6
function getRandomFn() {
  return Math.random() * 10;
}

//7
function CircleAreaFn(radius) {
  return Math.PI * Math.pow(radius, 2);
}
