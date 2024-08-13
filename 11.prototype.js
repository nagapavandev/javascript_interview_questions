/*

Prototypes in JavaScript are a fundamental concept that relates to how objects and functions interact with each other. 
Every object in JavaScript has a prototype, which can pass on properties and methods to other objects. 
This mechanism allows objects to share features and methods present in their prototype.

Prototype Chain: A key feature of prototypes is the prototype chain. 
When you try to access a property, JavaScript first looks for it on the current object. 
If it's not found, the search continues up the object's prototype, 
and this process goes on until the property is found or the end of the prototype chain is reached.

*/

function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.fullName = function (person) {
  return person.first + ' ~ ' + person.last;
}

Person.prototype.fullName = function () {
  return this.first + ' ' + this.last;
}

let person = new Person('Naga', 'Pavan');

console.log(Person.fullName({ first: 'Naga', last: 'Pavan' }));
console.log(person.fullName({ first: 'Naga', last: 'Pavan' }));