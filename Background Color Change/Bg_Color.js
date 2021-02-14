var btnClick = document.getElementById("btn_Click");

var bgcolor = document.querySelector("header div");

console.log(bgcolor);

function onBtnClick(){
    //var RandomNum = Math.floor(Math.random() * 255);
    //alert("rgb(" + RandomNum + "," + 45 + "," + 155 + ")");   ///alert ==> Display message Box

     bgcolor.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + " )";
   
}
btnClick.onclick = onBtnClick;
btnClick.addEventListener("mouseover", onBtnClick)