// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Hint: use the "spilt" method and a "for" loop.

/*
Step 1: Create function findLongestWord with parameter (str)
Step 2: Create variable for array of words using the split method. let arrayOfWords = str.split(" ");
Step 3: Create variable that will hold the longest word. Set the variable to an empty string: let longestWord = "";
Step 4: Create for loop to iterate through array of words. for (let i = 0; i < arrayOfWords.length; i++);
Step 5: Create a conditional if statement to compare the longest word with each word in the array. 
Step 6: In the if statement code block, set the longestWord = arrayOfWords[i] to store the word
Step 7: return the value of the single word.
Step 8: Log the function to the console.
*/


function findLongestWord(str) {
    let arrayOfWords = str.split(" ");
    let longestWord = " ";

    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longestWord.length) {
            longestWord = arrayOfWords[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord("Hey! My name is Obi, and I am solving my first problem in JavaScript"));