/*
The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array

*/

// Create an Array
const ages = [22, 20, 10, 100];

function checkAge(age) {
  return age > 18;
}

// Are all ages over 18?
let output = ages.every((age) => age > 18);

console.log(output);


