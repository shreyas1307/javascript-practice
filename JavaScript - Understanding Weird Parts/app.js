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
