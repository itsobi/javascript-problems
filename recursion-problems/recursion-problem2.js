//Write a JavaScript program to compute the sum of an array of integers.



const sum = (array) => {
  if (array.length === 0) {
    return 0
  }
  else {
    return array[0] + sum(array.slice(1))
  }
}

const sumValue = sum([5, 1, 45, 6, 8]);

console.log(sumValue);