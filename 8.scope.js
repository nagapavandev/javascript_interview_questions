const user = {
  name: 'pavan',
  age: '34',
  occupation: 'software developer',
  updateName: (name) => this.name = name,
  updateNameViaUserRef: (name) => user.name = name,
  updateNameViaFunctionScope: function (name) { this.name = name },
}

console.log(`updateName is ${user.updateName("praveen")}`);
console.log(`name is ${user.name}`);

console.log(`updateName is ${user.updateNameViaUserRef("gopal")}`);
console.log(`name is ${user.name}`);

console.log(`updateName is ${user.updateNameViaFunctionScope("ramana")}`);
console.log(`name is ${user.name}`);