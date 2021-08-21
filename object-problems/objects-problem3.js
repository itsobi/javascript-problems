// Create an object with three items in it, then write a JavaScript function 
// that accepts an object and tells you the length (tells you how many items are in it) 
// of the object.

const car = {
  make: "Honda",
  model: "Accord",
  year: 2021
};


function findLength(obj) {
  console.log(Object.keys(obj).length);
}

findLength(car);

