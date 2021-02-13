function Showtime(){
    var date = new Date();
    var Hrs = date.getHours();   //0-23
    var Min = date.getMinutes(); //0-59
    var Sec = date.getSeconds(); //0-59
    var session = "AM";
   // session.style.fontsize = 20px;
    if(Hrs == 0)
    {
        Hrs = 12;
    }
    if(Hrs > 12)
    {
        Hrs = Hrs - 12;
        session = "PM";
        
    }
    if(Hrs < 10)
    {
        Hrs = "0" + Hrs;
    }
    
    if(Min < 10)
    {
        Min = "0" + Min;
    }

    if(Sec < 10)
    {
        Sec = "0" + Sec;
    }

    var Time = Hrs + ":" + Min + ":" + Sec + " " + session;
    document.getElementById("ClockDisplay").innerText = Time;
    document.getElementById("ClockDisplay").textContent = Time;
    setTimeout(Showtime,1000);
}
Showtime();
