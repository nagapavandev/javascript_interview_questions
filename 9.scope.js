/*
function greeting() {
  var greet; // declaration is hoisted
  console.log(greet); // greet is declared but not yet assigned, so it's undefined
  greet = "hello"; // assignment
  console.log(greet); // greet is now "hello"
}
*/


var greet = "Hi";
function greeting() {
  console.log(greet);
  var greet = "hello";
  console.log(greet);
}

greeting();