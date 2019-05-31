// Udemy Course - JavaScript Understanding the Weird Parts

// Hoisting

// function b() {
//   console.log("called b");
// }

// b();

// console.log(a);

// var a = "Hello World";

// console.log(a);

// Execution Context

function a() {
  function b() {
    console.log(`${myVar} from function b`);
  }
  var myVar = 2;
  b();
}

var myVar = 1;
a();

var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person);
