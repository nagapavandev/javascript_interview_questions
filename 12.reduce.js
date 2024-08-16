/*
reduce method in JavaScript is a powerful tool for performing cumulative operations on arrays.
 It iterates through an array and applies a function that you provide, accumulating a result.
 */

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`sum is ${sum}`); // Output: 15

const arrays = [[1, 2, 3], [4, 5], [6]];
const flattened = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

const names = ['Alice', 'Bob', 'Alice', 'Bob', 'Charlie'];
const nameCounts = names.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(nameCounts); // Output: { Alice: 2, Bob: 2, Charlie: 1 }


// polyfill for reduce

if (!Array.prototype.customReduce) {
  Array.prototype.customReduce = function (callback, initialValue) {
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    var length = this.length >>> 0; // Convert length to an unsigned 32-bit integer

    if (length === 0 && arguments.length === 1) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    var index = 0;
    var accumulator;

    if (arguments.length >= 2) {
      accumulator = initialValue;
    } else {
      accumulator = this[index++];
    }

    function recursiveReduce(i, acc) {
      if (i >= length) {
        return acc;
      }
      if (i in this) {
        acc = callback(acc, this[i], i, this);
      }
      return recursiveReduce(i + 1, acc);
    }

    return recursiveReduce(index, accumulator);
  };
}

const sumA = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`sumA is ${sumA}`); // Output: 15