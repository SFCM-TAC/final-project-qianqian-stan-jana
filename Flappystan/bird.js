function Bird(){
  this.y = height/2;
  this.x =64;
//bird falling down
this.gravity = 1;
this.velocity = 0;
// bird looking
  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }
  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;
//bird position
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

  if (this.y < 0){
    this.y = 0;
    this.velocity = 0;
 }


}
}
