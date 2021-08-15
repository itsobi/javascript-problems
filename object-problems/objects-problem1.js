// 1: Create sample object
// 2: Create function deleteProperty w/ 2 parameters obj & key
// 3: In code block delete obj & key. To access the key use brackets
// 4: return the object
// 5: log the function deleteProperty as well as car(object) 
// & the key that will be deleted("color")

let car = {
  make: "Toyota",
  model: "Tacoma",
  year: "2010",
  color: "blue"
};

function deleteProperty(obj, key) {
  delete obj[key];
  return obj;
  
}

console.log(deleteProperty(car, "color"));