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


var person = {
  name: "nagapavan"
};
introduce.apply(person, ["Hi hello", 34]);


var person = {
  name: "Tanguturi. NAGAPAVAN"
};
var output = introduce.bind(person);
console.log("=========================================\n\n\n");
console.log(`output without passing parameters ${output()}`);
console.log(`output passing required parameters ${output("Hi sir")}`);
console.log(`output passing additional parameters ${output("Namaste sir", 31)}`);
console.log("\n\n\n=========================================");


