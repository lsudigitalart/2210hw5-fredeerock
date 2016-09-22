var s = 1;
var r = 0;
var t = 0;
var bDir = 1;
var ry = 0;
var ty = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
  rectMode(CENTER);
  angleMode(DEGREES);

}

function draw() {
  translate(width/2, height/2);
  // background(255, 100);
  // s = s + 0.01;
  r = r + 10;

  if(t > 300) {
    bDir = 0;
    ry = random(0, height/10);
    ty = random(height/2);
  }

  if (t < -300) {
    bDir = 1;
    ry = random(0, height/10);
    ty = random(height/2);
  }

  if(bDir == 1) {
    t++;
  } else {
    t--;
  }
  translate(t, ty);
  rotate(r);
  scale(s);
  println(t);
  rect(0, ry, 50, 50);
}
