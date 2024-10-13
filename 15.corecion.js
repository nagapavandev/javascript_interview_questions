/*
For console.log(1 + "1");

Output: "11"
Reason: In this case, the + operator is used, which triggers string coercion when one of the operands 
is a string. The number 1 is coerced to a string, and then the two strings are concatenated. 
So, "1" + "1" results in "11".
For console.log(1 - "1");

Output: 0
Reason: Here, the - operator is used, which does not perform string concatenation. 
Instead, JavaScript tries to convert the string "1" to a number to perform the subtraction. 
The string "1" is coerced to the number 1, so the operation becomes 1 - 1, which results in 0.

*/
console.log(1+"1");

console.log(1-"1");

