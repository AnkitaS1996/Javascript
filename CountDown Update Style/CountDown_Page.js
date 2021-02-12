var CountdownElement = document.getElementById('countdown');

var initialConuntdownVal = CountdownElement.innerHTML;
console.log(initialConuntdownVal);

var interval = setInterval(function()
{
    initialConuntdownVal--;
    
    if(initialConuntdownVal % 2 == 0)
    {
        CountdownElement.style.backgroundColor = "maroon";
    }
    else
    {
        CountdownElement.style.backgroundColor = "rgb(0, 128, 64)";
    }
    CountdownElement.innerHTML = initialConuntdownVal;
    CountdownElement.style.fontSize = initialConuntdownVal * 100 + "px";
    //console.log(initialConuntdownVal * 100 + "px");

    if(initialConuntdownVal <= 0)
    {
        clearInterval(interval);
    }   
}, 1000);


