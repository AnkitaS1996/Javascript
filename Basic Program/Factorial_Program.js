/*function abs(x){
    if(x>=0)
    {
        return x;
    }
    else{
        return -x;
    }
}*/

function factorial(n){
    var i = 1;
    while(n > 1)
    {
        i = i * n;
        n--;

    }
    console.log(i);
    return i;
}
factorial(4)
