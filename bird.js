function Bird() {
  this.y = height/2;
  this.x = 64;
  this.gravity = .5;
  this.upforce = 10;
  this.velocity = 0;
  this.height = 32;
  this.width = 32;

  this.show = function() {
    image(birdbg, this.x, this.y);
    //ellipse(this.x, this.y, 32, 32);
  }


  this.update = function() {
    if (this.velocity <= -7) {
      this.velocity = -7;
    }
    if (this.velocity > 7) {
      this.velocity = 7;
    }
//  console.log(this.velocity);
    this.y -= this.velocity;
    this.velocity += -this.gravity;
    if (this.y > height - 10) {
      this.y = height - 10;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }


  this.up = function() {
  this.y += this.velocity;
  this.velocity += this.upforce;

}
}
