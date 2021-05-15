console.log("********* if-else Conditional Statement **********")

console.clear()
console.log("****** Basic Concept ******")
if(7 > 5)
{
    console.log(true)
}

console.log("\n ****** Demo if-else ****** \n")
//if-else Statement
if(5 > 7)
{
    console.log(true)
}
else
{
    console.log(false)
}

//Example of Condition if-else Statement 
//Ex - Maximum From Two Numbers
console.log("\n ****** Maximum From Two Numbers ******* \n ")
var No1 = 100;
var No2 = 200;

if(No1 > No2)
{
    console.log("No1 is Maximum")
}
else
{
    console.log("No2 is Maximum")
}

//Multiple Conditons of if-else Statement
//Ex- To Display Maximum From Three Numbers
console.log("\n ****** Maximum From Three Numbers ******\n")
var N1 = 70;
var N2 = 50;
var N3 = 20;

if((N1 == N2) && (N1 == N3))
{
    console.log("All Three Given Numbers Are Equals")
}
if(N1 > N2)
{
    if(N1 > N3)
    {
        console.log("Given Number" + ' ' + N1 + ' ' + "is Maximum")
    }
    else
    {
        console.log("Given Number" + ' ' + N3 + ' ' + "is Maximum")
    }
}
else if(N2 > N3)
{
    console.log("Given Number" + ' ' + N2 + ' ' + "is Maximum")
}
else
{
    console.log("Given Number" + ' ' + N3 + ' ' + "is Maximum")
}
