// Step 1: Create for loop to iterate from 1-100
// Step 2: Create if statement using modulus/remainder operator. Include 3 & 5 in first if statement so there are not two tests for the same condition
// Step 4: In the if statement code block, console.log "FizzBuzz" so the console will print when multiples of 3 & 5 occur.
// Step 5: Create else if statement to be executed if the first statement is false. (i % 3 === 0) in that code block log "Fizz" to the console.
// Step 6: Create another else if to executed if the first 2 conditions are false. (i % 5 === 0). In that code block log "Buzz" to the console.
// Step 7: Create else statement that will be executed if all other conditions are false. log (i) to the console which will be every number that is not a multiple of 3, 5, or both.





function fizzBuzz(number) {
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}

let one = 100;

fizzBuzz(one);