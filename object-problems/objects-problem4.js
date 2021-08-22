// Create an object, then write a JavaScript function 
// that checks whether an object contains the specified key.



const car = {
    make: "Honda",
    model: "Accord",
    color: "Black",
    year: 2021
};

function checkObj(prop) {
    if (obj.hasOwnProperty(obj,prop)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkObj(car, "year"));