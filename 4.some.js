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