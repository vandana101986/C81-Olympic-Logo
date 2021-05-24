canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

//Draw rectangle
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=1;
ctx.rect(150,130,400,200);
ctx.stroke();

//Draw blue circle
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(250,200,40,0,2*Math.PI);
ctx.stroke();

//Draw black circle
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(350,200,40,0,2*Math.PI);
ctx.stroke();

//Draw red circle
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(450,200,40,0,2*Math.PI);
ctx.stroke();

//Draw orange circle
ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=5;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();

//Draw green circle
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();