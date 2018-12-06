var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var stan = new Image();
var qian = new Image();
var jana = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

stan.src = "images/stan.gif";
jana.src = "images/jana.gif";
qian.src = "images/qian.gif";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";


// some variables

var gap = 125;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

var speed = 1;

// audio files

var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

// on key down

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 25;
    fly.play();
}

// pipe coordinates

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};


// draw images
function draw(){

    ctx.drawImage(bg,0,0);

    for(var i = 0; i < pipe.length; i++){

        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

        pipe[i].x = pipe[i].x - speed;

        if( pipe[i].x == 10 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            });
        }

        // detect collision

        if( bX + stan.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+stan.height >= pipe[i].y+constant) || bY + stan.height >=  cvs.height - fg.height){
            location.reload(); // reload the page

        if( bX + jana.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+jana.height >= pipe[i].y+constant) || bY + jana.height >=  cvs.height - fg.height){
            location.reload(); // reload the page

        if( bX + qian.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+qian.height >= pipe[i].y+constant) || bY + qian.height >=  cvs.height - fg.height){
            location.reload(); // reload the page
        }

        if(pipe[i].x == 5){
            score++;
            scor.play();
        }
        if (score >= 1){
          speed = speed + 0.005;
        }

    }

    ctx.drawImage(fg,0,cvs.height - fg.height);

    ctx.drawImage(stan,bX,bY);

    ctx.drawImage(jana,bX,bY);

    ctx.drawImage(qian,bX,bY);

    bY += gravity;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-5);

    requestAnimationFrame(draw);

}


draw();
