var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(234 , 123 , 50 , 0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , mousedownevent);

function mousedownevent(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);

}

function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=5;
    ctx.arc(mousex , mousey , 50 , 0 , 2*Math.PI);
    ctx.stroke();
}