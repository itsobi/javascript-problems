// 1: Create variable arr that will hold array of numbers
// 2: Create variable newArr that will hold new array of numbers
// 3: Create function removeDuplicate that will hold code
// 4: Create for loop that will iterate through each number in variable arr
// 5: Create if statement, newArr.indexOf(arr[i]) === -1 to check if the number
// as already been passed to newArr
// 6: In if code block, push the number from arr to newArr, if it is not already there
// 7: log newArr to console, and add the .sort() method to put it into numerical order
// to clean it up even more
// 8: Call the function removeDuplicate()


let arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

let newArr = [];

function removeDuplicate() {
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  
  console.log(newArr.sort());
}

removeDuplicate();


