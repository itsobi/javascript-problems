// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number 
// of occurrences of the specified letter within the string. 




function characterCount(str, letter) {
  let counter = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === letter) {
      counter ++
    }
  }
  return counter;
}




console.log(characterCount("Peppers", "p"));

