var s = 1;
var r = 0;
var t = 0;
var bDir = 1;

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

  if(t > 180) {
    bDir = 0;
  }

  if (t < -200) {
    bDir = 1;
  }

  if(bDir == 1) {
    t++;
  } else {
    t--;
  }
  translate(t, 0);
  rotate(r);
  scale(s);
  println(t);
  rect(0, 0, 50, 50);
}
