/*
Write a JavaScript function that accepts a string as a parameter
and counts the number of vowels within the string.
Hint: use the "spilt", the Array#includes method and, a "for" loop or "forEach" loop.
*/

/*
1: Define function that takes a string.
2: Create variable that will hold string of vowels. (aeiou)
3: Create variable that will count how many vowels in string,
set equal to 0
4: Create for loop to iterate through each letter in string
5: If a vowel is found within string. Add 1 to the counter variable
6: If vowel is NOT found nothing will happen
7: Return counter
*/

function vowelCounter(str) {
  let vowels = "aeiou";
  let counter = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) > -1) {
      counter++
    }
  }
  
  
  return counter;
}


console.log(vowelCounter("How many vowels are in this string?"));