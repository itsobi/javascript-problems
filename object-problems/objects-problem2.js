// Create an array of people objects with first name, last name, and age,
//then write a JavaScript program to display the first and last names of all the people.
// Your function should take in an object and return the the values above.


let people = [
  {
    firstName: "Obi",
    lastName: "Obialo",
    age: 23
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 24
  },
  {
    firstName: "Bob",
    lastName: "Shoe",
    age: 25
  }
];


people.forEach(function(obj) {
  
  console.log(obj.firstName + " " + obj.lastName);

});




