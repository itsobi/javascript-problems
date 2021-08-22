// Create an object, then write a JavaScript function 
// that checks whether an object contains the specified key.



const car = {
    make: "Honda",
    model: "Accord",
    color: "Black",
    year: 2021
};

function checkObj(obj, prop) {
    return obj.hasOwnProperty(prop);
       
}

console.log(checkObj(car, "year"));