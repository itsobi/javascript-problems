//Write a JavaScript program to remove duplicate items from an array (consider case sensitivity).

function removeDuplicate(arr) {
  let newArr = [];
  
  for (let i = 0; i <arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr
}



console.log(removeDuplicate(["Jeep", "Jeep", "Volvo", "Toyota"]));




