let x = 100;
let y = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(x, y, 50, 50);
  fill(255, 0, 0);
}

function keyPressed() {
  if (key === "ArrowLeft") x -= 5;
  if (key === "ArrowRight") x += 5;
  if (key === "ArrowUp") y -= 5;
  if (key === "ArrowDown") y += 5;
}
