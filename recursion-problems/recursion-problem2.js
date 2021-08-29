//Write a JavaScript program to compute the sum of an array of integers.



function sum(arr) {
  if (arr.length < 1) {
    return 0;
  }
  return arr.pop() + sum(arr);
}

console.log(sum([5, 1, 45, 6, 8]));