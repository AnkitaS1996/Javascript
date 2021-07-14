console.clear();
console.log("\n $$$$ Javascript In-Built String Function Part - 2 $$$$$");

var ExampleString = "This is JavaScript Tutorial"

//toUpperCase() - It Convert Our String -> Uppercase Characters

console.log(ExampleString.toUpperCase())

//toLowerCase() - It Convert Our String -> Lowercase Characters

console.log(ExampleString.toLowerCase())

//concat() - It merges two or more strings
var FirstName = "Ankita"
var LastName = "Shedage"

console.log(ExampleString.concat(' ', FirstName))
console.log(ExampleString.concat(' ', FirstName, ' ',LastName))

//we can also use '+' to concat two or more strings
console.log(FirstName + ' ' + LastName + '. ' + ExampleString)

//trim() It Removes Extra Spaces
var ExtraSpaceString = "              Ankita0811@gmail.com       "
console.log(ExtraSpaceString.trim())

var ExtraSpaceStringExample2 = "     Ankita0811   @gmail.com    "
console.log(ExtraSpaceStringExample2.trim())

//charAt() -> This take a position as an arg and returns the character at that position
var CharAtExampleString = "This is My Test String"
console.log(CharAtExampleString.charAt(5))
console.log(CharAtExampleString.charAt(11))
console.log(CharAtExampleString.charAt(13))

//split() Splits our string on the basis of the arguments passed

var SampleString = "This is my Sample String"
console.log(SampleString.split(' '))

var SampleString2 = "This,is,my,sample,string"
console.log(SampleString2.split(','))

var SampleString3 = "This is AweSome"
console.log(SampleString3.split())

