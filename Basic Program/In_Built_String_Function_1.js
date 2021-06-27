console.clear();
console.log("In-Built String Function Part - 1")

var String1 = "This is a String for Javascript string Functions ,Javascript"

//Returns the length of the string
console.log(String1.length)

//find index of a string inside another string
console.log(String1.indexOf('Javascript'))
console.log(String1.indexOf('This'))

//Find Last index of a string inside another string
console.log(String1.lastIndexOf('Javascript'))
console.log(String1.lastIndexOf('This'))

//Get a Part of Our String slices(start,end)
console.log(String1.slice(0,8))
console.log(String1.slice(21,31))
console.log(String1.slice(-10))
console.log(String1.slice(5))

//Get Sub String  Function - substr(startpos, length)
console.log(String1.substr(0,4))
console.log(String1.substr(23,10))
console.log(String1.substr(21))

