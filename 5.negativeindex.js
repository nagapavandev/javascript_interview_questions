/*
  Negative index is not accessible in javascript.
*/

const array = [10, 20, 30, 40, 50];

console.log(array[-1]); // Output: undefined
console.log(array[-2]); // Output: undefined

console.log(array.at(-1)); // Output: 50 (last element)
console.log(array.at(-2)); // Output: 40 (second-to-last element)