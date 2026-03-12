function setup() {
  createCanvas(400, 400);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
}
  function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  stroke('magenta');
  strokeWeight(7);
  line(30, 29, 20, 44);
  line(30, 29, 42, 44);
  line(69, 29, 80, 44);
  line(69, 29, 58, 44);
  line(33, 64, 67, 64);
  pop();
}
function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 200, 1);
}