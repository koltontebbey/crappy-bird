var bg;
var birdbg;
var bird;
var pipes = [];
var gameover = 0;
var score = 0;


function setup() {
bg = loadImage("bg.jpg");
birdbg = loadImage("bird.png");
createCanvas(400, 600);
bird = new Bird();
pipes.push(new Pipe());
}

function draw() {
  if(gameover == 0) {
  background(bg);
  bird.show();
  bird.update();
if (frameCount % 120 == 0) {
pipes.push(new Pipe());

}

if (gameover == 0) {
  for (var i = 0; i < pipes.length; i++) {
    pipes[i].show();
    pipes[i].update();
    pipes[i].collide(bird);
    gameOver();
  }
  for (var i = 0; i < pipes.length; i++) {
    if(pipes[i].x < -50) {
      pipes.splice(0, 1);
      score++;
    }
  }
}
} if(gameover == 1) {
  //background(0);
  textSize(40);
  fill("white");
  textAlign(CENTER, CENTER);
  text("Failure! \nScore: " + score, width/2, height/2);
}
}

function gameOver(bird, pipe) {
  if (gameover == 1) {
    //console.log("boom");
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}
