var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var width = 3, rad = 30, lastEC = false;
var my_mousedown = function(){
    lastE = "mouseDown";
    console.log(lastE);
}
canvas.addEventListener("mousedown", my_mousedown);
var my_mouseup = function(){
    lastE = "mouseUp";
    console.log(lastE);
}
canvas.addEventListener("mouseup", my_mouseup);
var my_mouseleave = function(){
    lastE = "mouseLeave";
    console.log(lastE);
}
canvas.addEventListener("mouseleave", my_mouseleave);
var my_mousemove = function(e){
    var cpx = e.clientX - canvas.offsetLeft;
    var cpy = e.clientY - canvas.offsetTop;
    if(lastE==="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = document.getElementById("colorI").value;
        ctx.lineWidth = width;
        ctx.moveTo(lpx, lpy);
        ctx.lineTo(cpx, cpy);
        ctx.stroke();
    }
    lpx = cpx;
    lpy = cpy;
}
canvas.addEventListener("mousemove", my_mousemove);
var clearCanvas = function(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 800, 400);
}


//touch

var getPos = function(e, coord){
    if(coord === "x"){
        return e.touches[0].clientX - canvas.offsetLeft;
    }else{
        return e.touches[0].clientY - canvas.offsetTop;
    }
}
var my_touchstart = function(e){
    lpx = getPos(e, "x");
    lpy = getPos(e, "y");
}
canvas.addEventListener("touchstart", my_touchstart);
var my_touchmove = function(e){
    var cpx = getPos(e, "x");
    var cpy = getPos(e, "y");
    ctx.beginPath();
    ctx.strokeStyle = document.getElementById("colorI").value;
    ctx.lineWidth = 3;
    ctx.moveTo(lpx, lpy);
    ctx.lineTo(cpx, cpy);
    ctx.stroke();
    lpx = cpx;
    lpy = cpy;
}
canvas.addEventListener("touchmove", my_touchmove);
var clearCanvas = function(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
var sw = screen.width;
var sh = screen.height;
if(sw<992){
    canvas.width = sw - 50;
    canvas.height = sh- 200;
}
