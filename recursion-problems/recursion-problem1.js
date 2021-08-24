// 1: Create function with parameter of n. (n = number)
// 2: Create if statement, if n is equal to 1 or n is equal to 0 return 1
// 3: Create another if statement using else, return n * factorial(n - 1)
// 4: Outside of function log factorial(n)

function factorial(n) {
    if (n === 1 || n === 0) {
      return 1;
    } else {
      return n * factorial(n-1);
    }
  }
  
  console.log(factorial(5));