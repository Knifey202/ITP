let i = 5

function setup() {
  createCanvas(400, 400);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
}
  function drawObject(x, y, scaleN) {
  push();
  translate(x, y);
  scale(scaleN);
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
  if (i == 5) {
  for (let y = -21; y < height; y += 50) {
  for (let x = -10; x < width; x += 80) {
      drawObject(x, y, 1);
}}} else if (i == 10) {
   for (let y = -7; y < height; y += 40) {
  for (let x = -5; x < width; x += 40) {
      drawObject(x, y, 0.5);
}}} else if (i == 20) {
  for (let y = 0; y < height; y += 20) {
  for (let x = -2.5; x < width; x += 20) {
      drawObject(x, y, 0.25);
}}}}