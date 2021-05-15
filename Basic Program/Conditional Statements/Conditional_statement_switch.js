console.clear();

//Demo Switch
console.log("\n ****** Demo Switch Days Program ******\n")
var Day = 'Sunday';

switch(Day)
{
    case 'Monday':
        console.log("Monday")
        break;
    case 'Tuesday':
        console.log("Tuesday")
        break;
    case 'Wednesday':
        console.log("Wednesday")
        break;
    case 'Thursday':
        console.log("Thursday")
        break;
    case 'Friday':
        console.log("Friday")
        break;
    case 'Saturday':
        console.log("Saturday")
        break;
    case 'Sunday':
        console.log("Sunday")
        break;
    case 'Default':
        console.log("Invalid Day");
}

//Current Day
console.log("\n ****** Current Day ****** \n");
var day;
switch(new Date().getDay())
{
    case 0:
        day = "Sunday";
        console.log("Sunday");
        break;
    case 1:
        day = "Monday";
        console.log("Monday");
        break;
    case 2:
        day = "Tuesday";
        console.log("Tuesday");
        break;
    case 3:
        day = "Wednesday";
        console.log("Wednesday");
        break;
    case 4:
        day = "Thursday";
        console.log("Thursday");
        break;
    case 5:
        day = "Friday";
        console.log("Friday");
        break;
    case 6:
        day = "Saturday";
        console.log("Saturday");
        break;
    Default:
         console.log("Invalid Day");
         break;
}
