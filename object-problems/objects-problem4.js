const car = {
    make: "Honda",
    model: "Accord",
    color: "Black",
    year: 2021
};

function checkObj(prop) {
    if (car.hasOwnProperty(obj,prop)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkObj(car, "year"));