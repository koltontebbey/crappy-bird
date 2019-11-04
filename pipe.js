function Pipe() {

//Magical piping algorithm
pipeAlg = random(0,7);
if (pipeAlg <= 1 ) {
  this.top = 10;
  this.bottom = 500;
}
if (pipeAlg > 1 && pipeAlg <= 2) {
  this.top = 100;
  this.bottom = 400;
}
if (pipeAlg > 2 && pipeAlg <= 3) {
  this.top = 200;
  this.bottom = 300;
}
if (pipeAlg > 3 && pipeAlg <= 4) {
  this.top = 300;
  this.bottom = 200;
}
if (pipeAlg > 4 && pipeAlg <= 5) {
  this.top = 400;
  this.bottom = 100;
}
if (pipeAlg > 5 && pipeAlg <= 7) {
  this.top = 500;
  this.bottom = 10;
}

//Pipe variables
  this.x = width;
  this.w = 42
  this.speed = 2;


  this.show = function() {
    fill("green");
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom)
  }
//Pipes get moving
  this.update = function() {
    this.x -= this.speed;
  }


//Bird goes boom
  this.collide = function(bird) {
    // if((this.x + this.w == bird.x || this.x - (this.w - 12) == bird.x) && ((this.top + 15) >= bird.y || height-this.bottom + 5 <= bird.y)) {
    //   gameover = 1;
    //
    // }
  //   for(let i = 0; i < this.w; i++) {
  //     for(let j = 0; j < this.top; j++) {
  //       for(let z = 0; z < this.bottom; z++) {
  //     if((this.x + i == bird.x && (this.top >= bird.y || (height-this.bottom - 20) <= bird.y))) {
  //       gameover= 1;
  //       }
  //     }
  //   }
  // }
  let halfBirdHeight = bird.height / 2;
  let halfBirdwidth = bird.width / 2;
  if (bird.y - halfBirdHeight < this.top - 18 || bird.y + halfBirdHeight > height-this.bottom) {
    //if this.w is huge, then we need different collision model
    if (bird.x + halfBirdwidth > this.x && bird.x - halfBirdwidth < this.x + this.w - 10) {
        gameover = 1;
    }
  }
}


}
