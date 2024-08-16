const numbers = [1, 2, 3, 4, 5];

// Check if there is at least one number greater than 3
const hasNumberGreaterThanThree = numbers.some(number => number > 3);

console.log(hasNumberGreaterThanThree); // Output: true

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

// Check if there is any user who is older than 30
const hasUserOlderThan30 = users.some(user => user.age > 30);

console.log(hasUserOlderThan30); // Output: true


const words = ['apple', 'banana', 'cherry'];

// Check if there is any word that includes the letter 'a'
const hasWordWithA = words.some(word => word.includes('a'));

console.log(hasWordWithA); // Output: true


// polyfill for some function

if (!Array.prototype.customSome) {
  Array.prototype.customSome = function (callback, thisArg) {
    // Ensure 'this' is a valid object
    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    // Ensure callback is a function
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    console.log(`this is ${this}`);
    var array = Object(this); // Convert 'this' to an object
    console.log(`array is ${array}`);
    // Iterate through the array using 'reduce'
    return Array.prototype.reduce.call(this, function (found, value, index) {
      // Short-circuit if we already found a match
      if (found) return true;

      // Check if the callback returns true for the current value
      return callback.call(thisArg, value, index, this);
    }, false);
  };
}


let hasWordWithB = words.customSome(word => word.includes('a'));

console.log(hasWordWithB); // Output: true