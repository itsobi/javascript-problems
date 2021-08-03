// Step 1: Create function palindrome with a parameter of str.
// Step 2: In function code block, create variable named reversedString.
// Step 3: Set the reversedString variable equal to .split("") to turn the word into an array of letters
// .reverse() to reverse the letters in the array & .join("") to convert the reversed letters back into a string.
// Step 4: Create if elses reversedString === str and return true.
// Step 5: Crete else statement & return false.


function palindrome(str) {
  let reversedString = str.split("").reverse().join("");
  
  if (reversedString === str) {
    return true;
  } else {
    
    return false;
  }
  
}

console.log(palindrome("racecar"))