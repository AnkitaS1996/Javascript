console.clear();
var N1 = 10;
var N2 = 20.3;
//Tostring() number as input and returns a string
console.log(N1.toString())
console.log(N2.toString())

var strNo1 = "10";
var strNo2 = "11.5";
var strNo3 = "ABC";     //NaN == Not A Number

//parseInt() string numeral as input and returns a number
console.log(parseInt(strNo1));
console.log(parseInt(strNo2));
console.log(parseInt(strNo3));   

//parseFloat() string numeral as an input and returns a floating number
console.log(parseFloat(strNo2))

//tofixed() takes floating number and rounds it off to given position
var strFloat = 87.987653;
console.log(strFloat.toFixed())
console.log(strFloat.toFixed(2));
console.log(strFloat.toFixed(5))
console.log(strFloat.toFixed(10))
