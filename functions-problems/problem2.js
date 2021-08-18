// 1: Create function vowelCounter with parameter of (str)
// 2: In function code block, create variable vowels = "aeiou"
// and variable counter = 0 to hold numeric count of vowels in string passed in
// 3: Create for loop through length of str
// 4: In code block create if statement, if vowels.indexOf(str[i].toLowerCase()) is greater than -1
// increase counter by 1 (counter++)
// 5: return counter

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