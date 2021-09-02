// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Hint: use the "spilt" method and a "for" loop.

/*
Write a function finding the longest word within a string.
Example str: Hi, my name is Obi
1: Define function that takes in a string
2: Break string into array of each individual word
3: define var longestWord and set default value to empty string
4: Create for loop to iterate over each word in array
5: Compare length of current word in loop to length of the longestWord
6: If the current word is longer than longestWord, the current word becomes longestWord
7: If the current word is NOT longer than longestWord, nothing will happen.
8: KEEP LOOPING
9: Return longestWord
*/


function findLongestWord(str) {
    let arrayOfWords = str.split(" ");
    let longestWord = "";

    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longestWord.length) {
            longestWord = arrayOfWords[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord("Hey! My name is Obi, and I am solving my first problem in JavaScript"));