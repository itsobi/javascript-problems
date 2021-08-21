//Write a JavaScript program to remove duplicate items from an array (consider case sensitivity).



function removeDuplicate(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(i) > -1) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(removeDuplicate([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));


