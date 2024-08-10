/*

This is because undefined is converted to NaN, and NaN is not less than any number, including 9. 
In fact, comparisons involving NaN always return false.

*/

const x = () => {
  return;
  return 7;
}

console.log(`output of the function is ${x()}`);
console.log(`output 2 ${x() < 9}`);
console.log(`output 3 ${x() > 9}`);
console.log(`output 4 ${x() == 9}`);
console.log(`output 5 ${x() == NaN}`);