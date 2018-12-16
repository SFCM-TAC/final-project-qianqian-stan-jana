function Pipe(){
  this.top = random((height-1)/2);
  this.bottom = random((height-1)/2);
  this.x = width;
  this.w = 50;
  this.speed = 10;
  this.acceleration = 10;


  this.highlight = false;

  this.hits = function(bird){
    if (bird.y < this.top || bird.y > height - this.bottom){
      if (bird.x > this.x && bird.x < this.x+this.w){
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function(){
    fill(34,139,34);
    if (this.highlight){
      fill(255,0,0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function(){
    this.x -= this.speed;
  }
  if(count >= 3){
    this.x -= this.speed + acceleration;

  }
  if(count >= 5){
    this.x -= this.speed + acceleration * 2;
  }
  if(count >= 8){
    this.x -= this.speed + acceleration * 4;
  }
}
