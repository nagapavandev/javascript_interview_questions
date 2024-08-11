/*
Generators are designed to be consumed once. After a generator function completes its execution, it cannot be reset or restarted. 

When you create a generator and start iterating over it, the internal state of the generator advances with each yield. 
Once the generator function reaches the end (either by returning a value or naturally completing execution), 
the generator is considered done and cannot be restarted because its internal state is set to closed.
 Any subsequent attempts to continue iterating will return undefined

If you need to iterate over the same sequence again, you would need to create a new instance of the generator function:

Advanced tip: async/await is built on top of generators under the hood.

*/


function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

for (var value of generatorFunction()) {
  console.log(value);
}

for (var value of generatorFunction()) {
  console.log(value);
}

var gen = generatorFunction();

for (var value of gen) {
  console.log(value);
}

for (var value of gen) {
  console.log(value); //undefined
}