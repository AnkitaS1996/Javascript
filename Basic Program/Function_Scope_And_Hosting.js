function test(o){  
    var i = 0;     //=> i is defined throughout function
    if(typeof o == "object")
    {
        var j = 0;  //=> j is defined everywhere,not just block
        for(var k = 0;k < 10;k++)  // k is defined everywhere, not just loop
        {
            console.log(k);  //> print numbers 0 through 9
        }
        console.log(k);   //=> k is still defined: prints 10
    }
    console.log(j);   //=> j is defined,but may not be initialized
}

test(Object());

console.log("\n===================================================\n");

var scope = "global scope";  // A Global Variable
function checkscope()
{
    var scope = "local scope";   //A Local variable
    function nested(){
        var scope = "nested scope"; // A nested scope of local variables
        console.log(scope);
        return scope;   // Return the value in scope here
    }
    return nested();
}
checkscope()  //=> "nested scope"

console.log("\n===================================================\n");
var scope = "global";
function f()
{
    console.log(scope); //Prints "undfined", not "global"
    var scope = "local"; //=> Variable initialized here,but defined everywhere
    console.log(scope); //Prints "local"
}
f();

console.log("\n===================================================\n");

function f()
{
    var scope;  //Local  variable is declared at the top of the function
    console.log(scope); // It exits here,but still has "undefined" value
    scope = "local"  // Now We initialize it and give it a value
    console.log(scope);
}

