/*
Step 1: Create function vowelCounter with parameter of (str)
Step 2: Create counter set equal to 0. let counter = 0
Step 3: Create variable of the vowels. let vowels = "aeiou" to assign vowels to the variable
Step 4: Crete for loop to iterate through sentence to find vowels.
Step 5: Create conditional if statement using .includes & .toLowerCase to turn all the words in the sentence to lower case.
Step 6: Return counter. To add more flare to it, add words between quotes + counter + to return a words with the returned value.
*/

function vowelCounter(str) {
  
  let arrayOfLetters = str.split("");
  let vowels = "aeiou";
  let counter = 0;

  
  for (let i = 0; i < arrayOfLetters.length; i++) {
    if (vowels.includes(arrayOfLetters[i].toLowerCase())) {
      counter++
    }
  }
  
  return "This sentence has "  + counter +  " vowels in it!";
}

console.log(vowelCounter("How many vowels are in this sentence?"));