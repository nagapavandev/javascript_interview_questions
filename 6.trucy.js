/*
The first console.log returns true because the JavaScript OR operator (||) is short-circuiting. 
This means that it will evaluate the operands from left to right and stop evaluating as soon as it finds a truthy value. 
In this case, the first operand, country === "USA", is false, but the second operand, "AUS", is truthy, so the OR operator stops evaluating and returns true.

The second console.log returns false because the parentheses around each operand force the JavaScript engine to evaluate them all, even if the previous operand is truthy.
 In this case, the first operand, country === "USA", is false, and the second operand, country === "AUS", is also false, so the OR operator returns false.

It is important to note that the JavaScript OR operator can be used with non-Boolean values as well. 
In these cases, the operator will return the first truthy value, or the last value if no truthy value is found. 
This can be useful for writing concise code, but it can also be confusing if you are not aware of how the operator works.

*/


country = "IND";
console.log((country === "USA" || "AUS" || "UK") ? "Yes" : "No");

console.log((country === "USA") || (country === "AUS") || (country === "UK") ? "Yes" : "No");

