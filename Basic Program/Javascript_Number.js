var No1 = 10;    //Integer
var No2 = 10.9   //Decimal Number
console.log("No1 = ",No1)
console.log("No1 = ",No2)
//Javascript has Built in Function typeof which use of variable Returns type of datastored in the variable.
console.log(typeof(No1));     //Javascript has semicolon is optional
console.log(typeof(No2));


//Addition
var No3 = 15;
var Sum = No3 + No2;
console.log("Addition is = ",Sum);

//Substraction
var Sub = No3 - No1;
console.log("Substration is =", Sub)

//Multiplication
var Mult = No3 * No2 * No1;
console.log("Multiplication is  =", Mult);

//Division
var Div = No3/No1;
console.log("Division is = ",Div)

var DivByZero = No3 / 0;
console.log(DivByZero);
console.log(typeof(DivByZero));

var MulByString = No3 * 'A';
console.log(MulByString);

console.log(typeof(MulByString))