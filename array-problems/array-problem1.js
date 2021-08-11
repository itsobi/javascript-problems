// 1: Create variable secondElement and set it equal to function with 2 parameters (array, n)
// 2: In code block, return array.slice(0, n) 0 = index start position
// n = index end position. (not included)
// 3: Outside of code block console.log(["array"], 2)



let secondElement = function(array, n) {
    return array.slice(0, n);
  };

console.log(secondElement(["blue", "green", "yellow", "orange"], 2));