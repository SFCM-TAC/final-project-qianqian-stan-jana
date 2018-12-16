function Bird() {
  this.y = height/2;
  this.x = 64;
  this.w = 32;
  this.h = 32;
  this.distance = 5

  this.gravity = .5;
  this.lift = 15;
  this.velocity = 0;
  this.speed = 1;
  this.show = function(){
    fill(240,230,140);
    ellipse(this.x, this.y, this.w, this.h);
    fill(0);
    ellipse(this.x+this.distance+3, this.y, 4, 4);
    fill(255,127,80);
    triangle(this.x+this.distance+10, this.y-5, this.x+this.distance+10, this.y+5, this.x+this.distance+15, this.y);
  }

  this.up = function(){
    this.velocity -= this.lift;
  }

  this.update = function(){
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height){
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }


  }
}
