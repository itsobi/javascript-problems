// Step 1: Create function characterCounter that has 2 parameters: str, letter.
// Step 2: Create variable letterCounter. Set it equal to 0.
// This will hold the value of the amount of times the letter is found in the string.
// Step 3: Create for loop, iterating through each word in the string.
// Step 4: Create if statement using .charAt method, set equal to letter (parameter).
// Step 5: In if statement block code,
// make an addition assignment operator for the letterCounter variable.
// Adding 1 to letterCounter everytime the letter is found within the string.
// Step 6: Return letterCounter

function characterCounter(str, letter) { 
  let letterCounter = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      letterCounter += 1;
    }
  }
  
  return "This string contains " + letterCounter + " 0's!";
}

console.log(characterCounter("How many o's are in this sentence?", "o"));

