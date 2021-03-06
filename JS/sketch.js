var bird;
var pipes = [];
var count = 0;
var flag = true;
var pipe_flag = true;
var acceleration = 50;
//var w = 700;
//var h = 700;
var w = window.screen.width/1.3;
var h = window.screen.height/1.3;
var cnv;

var r = 250
var g = 100
var b = 0

function centerCanvas(){
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x,y);
}

function setup(){
  //cnv = createCanvas(windowWidth,windowHeight); //700,600
  cnv = createCanvas(w,h);
  centerCanvas();
  bird = new Bird;
  pipes.push(new Pipe());
}

function draw(){
  background(r, g, b);
  bird.update();
  bird.show();
  fill(255);
  textSize(64);
  str = "Score: " + count;
  text(str, w/3, h/5);

  if (frameCount % 50 == 0){
    pipes.push(new Pipe());
  }
  for (var i = 0; i < pipes.length; i ++){
    pipes[i].show();
    if (pipe_flag == true){
      pipes[i].update();
    }
    // if (count >= 1){

    //   pipes.push(new Pipe());
    // }
    if (flag == true && pipes[i].x < 0/*(width/15)*/){ //negative?
      flag = false;
      count += 1;
      str = "Score: " + count;
      r = Math.floor((Math.random() * 255));
      g = Math.floor((Math.random() * 255));
      b = Math.floor((Math.random() * 255));
    }

    if (pipes[i].hits(bird)){
      str = "Score: " + count;
      startOver();
      pipe_flag = false;
    }

    if (pipes[i].x < -width/3){  //-width...goes off screen
      pipes.splice(i,1); //deletes element from array
      flag = true;
    }

  }
}

Tone.Transport.start()
const synth = new Tone.DuoSynth().toMaster()
const seq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, '8n', time)
}, ['A3', 'C4', ['D4', 'E4'], 'C4', ['D4', 'E4'], 'F4', 'E4', 'D4', 'G3', ], '4n')

function startMusic() {
  seq.start();
}

function stopMusic() {
  seq.stop();
}


function startOver(){
  var button = createButton("Hahahaha Bird died, start again?");
  button.position(windowWidth/2, windowHeight/2);
  button.mousePressed(reset);
}

function reset(){
  window.location.reload()
}

function windowResized(){
  centerCanvas();
}

function touchStarted(){
  if (pipe_flag == true){
    bird.up();
  }
  if (pipe_flag == false){
    reset();
  }
  return false;
}

function keyPressed(){
  if (key == ' ' == true){
    var synth = new Tone.AMSynth().toMaster()
    synth.triggerAttackRelease('C4', '8n');
  }
}


function keyPressed(){
  if (key == ' ' && pipe_flag == true){
    bird.up();
    bird.w = 128;
    bird.h = 128;
    bird.distance = 40;
    setTimeout (birdReset, 200)
  }
}









function birdReset(){
  bird.w = 32;
  bird.h = 32;
  bird.distance = 5;
}
