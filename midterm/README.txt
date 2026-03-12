#Midterm Documentation - Amber Kuck

##Phase1:

After taking a look at the P5 code library I was able to determine that this project could go a lot easier if I used the line function to create a design out of multiple lines. This inspired me to draw a classic, and one of my personal favorite, emoticons: ^_^.

I drew it out on paper, took a photo, and added the pdf to my midterm github folder.

##Phase2:

1. First I knew I needed to create a canvas with a cute color as the background... I used the code you gave us in the midterm instructions combined with some coloring code I found in the P5 code library to create a cyan/green, 100x100, canvas to paint on:

function setup() {
  createCanvas(100, 100);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
}

2. I found out, through the P5 code library, that when using the line function I want to be using the stroke() funtion not the nostroke() function... I also learned I can input a color code or name into the stroke() function so I chose 'magenta' ^_^. I then started arranging my lines while referencing the line parameters (line(x1,y1,x2,y2)). I didn't run into much error at all here other than having to input/test a bunch of different variables... I ended up with this code which I am quite proud of:

function setup() {
  createCanvas(100, 100);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
  stroke('magenta');
  strokeWeight(7);
  line(30, 29, 20, 44);
  line(30, 29, 42, 44);
  line(69, 29, 80, 44);
  line(69, 29, 58, 44);
  line(33, 64, 67, 64);
}

3. It just about perfectly depicts a magenta ^_^ emoticon on a cyan/green background (containing 5 shapes or I guess lines in my case). Yay!

##Phase3:

1. First I changed the parameters of my canvas to 400x400 like what was asked. I then took my stroke and line funtions and fit them inside the 'drawobject','push','translate',the the 'pop'. Copied directly the midterms instructions:

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

2. This I think is working but isn't printing anything because I have no draw function following to actually print the image... So i added that to the end with the parameters given in the midterm instructions:

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

3. And it printed two of my emoticons right where/how they should be. Yay again!

##Phase4:

1. Off the bat, I am immediately stumped on where to start... I think I will look back at the old code along for nested for-loops (because of hint in the instructions) and see if I can incorperate said code into my code... That left me with this disfunctional piece of code:

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
  for (let y = 0; y < size; y++) { // accumulator for the 'columns'
  for (let x = 0; x < size; x++) { // accumulator for the 'rows'
    if ((x + y) % 2 === 0) {
      board += " ";
    }}}
}

2. This left my canvas blank with only the background color while also giving me a message that the 'size' variable was unknown. I think I will try switching the size variables with hieght and width (like hinted to in the midterm instructions)...That left me with this piece of dysfuctional code:

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
  for (let y = 0; y < height; y++) { // accumulator for the 'columns'
  for (let x = 0; x < width; x++) { // accumulator for the 'rows'
    if ((x + y) % 2 === 0) {
      board += " ";
    }}}
}

3. This also gave me a blank canvas however the error message switched to 'board' being the unknown variable so I think the height and width variables may be correct... maybe I need to switch the 'board =+ ""' with something else.I entered the drawObject function here but the 's' variable is causing problems... I remember that the 's' variable in my original code can be given a number to determine the size. I will change both 's' in the code into a 1 because earlier that was giving me the normal size:

function setup() {
  createCanvas(400, 400);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
}
  function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(1);
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
  for (let y = 0; y < height; y++) { // accumulator for the 'columns'
  for (let x = 0; x < width; x++) { // accumulator for the 'rows'
    if ((x + y) % 2 === 0) {
      drawObject(x, y, 1);
    }}}
}

4. My canvas isn't blank anymore!!! But it seems it is definitely not right either. I think I am making out 1 giant image rather than multiple small ones.... hmmmm. I will try editing some of the variables to see if I can fix the size:

function setup() {
  createCanvas(400, 400);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
}
  function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(1);
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
  for (let y = 0; y < height; y += 20) { // accumulator for the 'columns'
  for (let x = 0; x < width; x += 20) { // accumulator for the 'rows'
    if ((x + y) % 2 === 0) {
      drawObject(x, y, 1);
    }}}
}

5. It seemed that if I changed the x/y ++ functions into a += I am able to more easily control the size. I think I will be able to hone this into the fully correct size but I am worried because there is a boarder on the top and left sides of my canvas that I think I will have to adress once I fix the size:

function setup() {
  createCanvas(400, 400);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
}
  function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(1);
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
  for (let y = -24; y < height; y += 50) {
  for (let x = -15; x < width; x += 70) {
      drawObject(x, y, 1);
    }}
}

6. I think I have found the correct variables for size here while also fixing the boarder issue... I replaced the x/y = in order to fix boarder and the x/y += in order to find the correct size for each tile:

function setup() {
  createCanvas(400, 400);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
}
  function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(1);
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
  for (let y = -21; y < height; y += 50) {
  for (let x = -10; x < width; x += 80) {
      drawObject(x, y, 1);
    }}
}

7. I lied... After messing with the variables some more, this is a way better variable situation as it creates a balanced 5 by 5 tile. I then talked to Rachel at office hours and determined I really haven't gotten anywhere because I need to make the computer do a lot more of the work/computations for me. As of right now, in order to change the tile sizes and amount I have to edit each variable independently. I think I will try using if/else statements to tell the computer what type of tile layout I want:

let i = 5

function setup() {
  createCanvas(400, 400);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
}
  function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(1);
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
   for (let y = -21; y < height; y += 20) {
  for (let x = -10; x < width; x += 40) {
      drawObject(x, y, 1.5);
}}} else if (i == 20) {
  for (let y = -21; y < height; y += 10) {
  for (let x = -10; x < width; x += 20) {
      drawObject(x, y, 2);
}}}}

8. This allows me to choose whether I want 5x5, 10x10, or 20x20 but it definitely isn't perfect because although the amount of images is changing the scale isn't despite each scale being a different variable... hmmm. May god strike down semantic errors...

let i = 

function setup() {
  createCanvas(400, 400);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
}
  function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(1);
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

9. With these edited variables the code is almost perfect. Now when I change i = to 5, 10, or 20 while also changing the scale to 1, 0.5, or 0.25 in coersion the size and amount of each tile is correct. I am going to attempt adding a placeholder for the scale() so that maybe instead of setting the scale in the beginning it decides to wait until the if else functions:

let i = 10

function setup() {
  createCanvas(400, 400);
  let c1 = color('hsl(160, 100%, 50%)');
  background(c1);
}
  function drawObject(x, y, scale) {
  push();
  translate(x, y);
  scale(scale);
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

10. I am so close I feel but the code is doing nothing now... It's giving me a message basically saying that scale cant be used within scale()... I'm going to try making it something else i guess...

let i = 10

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

11. I DID IT! I just added a N (which in my head translated to number but I think it could be anything). Now I will recieve the perfect grid I want just by changing the 'let i = ' function.






