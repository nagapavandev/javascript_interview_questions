function printMyName(name) {
  //console.log(this);
  console.log(name);
}
printMyName.call("bittu");



function printMyName1(name) {
  console.log(name);
}
printMyName1.call(null, "bittu");



function introduce(greeting, age) {
  console.log(greeting + "! My name is " + this.name + " and I am " + this.age + " years old.");
}
var person = {
  name: "John"
};
introduce.call(person, "Hello", 30);
