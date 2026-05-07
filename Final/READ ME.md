#Final Project Documentation 

1. I really had no idea where to start for this assignment other than to use the [Clickable Text](https://codepen.io/trending)website to emulate this music video.

2. I decided to go to gemini AI [Clickable Text](https://use.ai)with this puzzle. I have never used AI in this context before so I didnt really know where to start... I gave it a prompt: "I need to write a javascript/html/css code on a live coding website that creates a video. In the video I need there to be 2 girls dancing with rain clouds above them and a city scape background". It replied with some pretty decent fully formatted code for html and css:

*html*
<div class="scene">
  <div class="city"></div>
  <div class="girl girl1">
    <div class="body"></div>
  </div>
  <div class="girl girl2">
    <div class="body"></div>
  </div>
  <div class="cloud cloud1"></div>
  <div class="cloud cloud2"></div>
</div>

*css*
body {
  margin: 0;
  background: #222;
  overflow: hidden;
}
.scene {
  position: relative;
  width: 100vw;
  height: 100vh;
}
/* City background */
.city {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: url('[i.imgur.com](https://i.imgur.com/p5S8W2w.png)') repeat-x;
  background-size: cover;
  animation: cityMove 20s linear infinite;
}
@keyframes cityMove {
  from { background-position: 0 0; }
  to { background-position: -2000px 0; }
}
/* Girls */
.girl {
  position: absolute;
  bottom: 20px;
  width: 100px;
  height: 200px;
}
.girl1 { left: 30%; }
.girl2 { left: 60%; }
.girl .body {
  width: 100px;
  height: 200px;
  background: pink;
  border-radius: 20px;
  animation: dance 1s infinite alternate ease-in-out;
}
@keyframes dance {
  0% { transform: rotate(-10deg); }
  100% { transform: rotate(10deg); }
}
/* Clouds */
.cloud {
  position: absolute;
  top: 50px;
  width: 150px;
  height: 80px;
  background: lightgray;
  border-radius: 50%;
  box-shadow: 40px 20px 0 lightgray, 80px 10px 0 lightgray;
}
.cloud1 { left: 25%; animation: rain1 0.4s infinite linear; }
.cloud2 { left: 55%; animation: rain2 0.4s infinite linear; }
/* Rain (simple falling effect using box-shadow) */
@keyframes rain1 {
  0% { box-shadow: 40px 80px 0 blue, 80px 80px 0 blue; }
  100% { box-shadow: 40px 130px 0 transparent, 80px 130px 0 transparent; }
}
@keyframes rain2 {
  0% { box-shadow: 40px 80px 0 cyan, 80px 80px 0 cyan; }
  100% { box-shadow: 40px 130px 0 transparent, 80px 130px 0 transparent; }
}

3. (it also gave me some console.log messages but I ignored those because I didn't want there to be text on the screen). I realized that based on the foundation of this code that my project could mostly be done through css with the help of AI. I was previously interested in implementing 3rd party pngs but I knew that those would be extremely difficult to animate so I though that this alternate route could be a good idea... This created an extremely rudimentary image of two girls dancing and the background didnt work. So I asked the AI a more simple question, if it could edit the code to make the girls more realistic:

*html*
<div class="scene">
  <div class="city"></div>
  <svg class="dancer" id="d1" viewBox="0 0 200 400">
    <circle cx="100" cy="60" r="40" class="head" />
    <rect x="80" y="100" width="40" height="120" rx="20" class="body" />
    <line x1="80" y1="120" x2="40" y2="200" class="arm arm-left" />
    <line x1="120" y1="120" x2="160" y2="200" class="arm arm-right" />
    <line x1="90" y1="220" x2="70" y2="330" class="leg leg-left" />
    <line x1="110" y1="220" x2="130" y2="330" class="leg leg-right" />
  </svg>
  <svg class="dancer" id="d2" viewBox="0 0 200 400">
    <circle cx="100" cy="60" r="40" class="head" />
    <rect x="80" y="100" width="40" height="120" rx="20" class="body" />
    <line x1="80" y1="120" x2="40" y2="200" class="arm arm-left" />
    <line x1="120" y1="120" x2="160" y2="200" class="arm arm-right" />
    <line x1="90" y1="220" x2="70" y2="330" class="leg leg-left" />
    <line x1="110" y1="220" x2="130" y2="330" class="leg leg-right" />
  </svg>
  <div class="cloud cloud1"></div>
  <div class="cloud cloud2"></div>
</div>

*css*
body {
  margin: 0;
  background: #222;
  overflow: hidden;
}
.scene {
  position: relative;
  width: 100vw;
  height: 100vh;
}
/* City background */
.city {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: url('[i.imgur.com](https://i.imgur.com/p5S8W2w.png)') repeat-x;
  background-size: cover;
  animation: cityMove 20s linear infinite;
}
@keyframes cityMove {
  from { background-position: 0 0; }
  to { background-position: -2000px 0; }
}
/* Dancers */
.dancer {
  position: absolute;
  bottom: 20px;
  height: 300px;
  stroke: white;
  stroke-width: 12;
  stroke-linecap: round;
  fill: none;
}
 #d1 { left: 30%; }
 #d2 { left: 60%; }
/* Dance animations */
.arm-left {
  animation: armSwingLeft 1s infinite alternate ease-in-out;
}
.arm-right {
  animation: armSwingRight 1s infinite alternate ease-in-out;
}
.leg-left {
  animation: legKickLeft 1s infinite alternate ease-in-out;
}
.leg-right {
  animation: legKickRight 1s infinite alternate ease-in-out;
}
@keyframes armSwingLeft {
  0% { transform: rotate(-20deg); transform-origin: 80px 120px; }
  100% { transform: rotate(20deg); transform-origin: 80px 120px; }
}
@keyframes armSwingRight {
  0% { transform: rotate(20deg); transform-origin: 120px 120px; }
  100% { transform: rotate(-20deg); transform-origin: 120px 120px; }
}
@keyframes legKickLeft {
  0% { transform: rotate(10deg); transform-origin: 90px 220px; }
  100% { transform: rotate(-10deg); transform-origin: 90px 220px; }
}
@keyframes legKickRight {
  0% { transform: rotate(-10deg); transform-origin: 110px 220px; }
  100% { transform: rotate(10deg); transform-origin: 110px 220px; }
}
/* Clouds */
.cloud {
  position: absolute;
  top: 50px;
  width: 150px;
  height: 80px;
  background: lightgray;
  border-radius: 50%;
  box-shadow: 40px 20px 0 lightgray, 80px 10px 0 lightgray;
}
.cloud1 { left: 25%; animation: rain1 0.4s infinite linear; }
.cloud2 { left: 55%; animation: rain2 0.4s infinite linear; }
/* Rain */
@keyframes rain1 {
  0% { box-shadow: 40px 80px 0 blue, 80px 80px 0 blue; }
  100% { box-shadow: 40px 130px 0 transparent, 80px 130px 0 transparent; }
}
@keyframes rain2 {
  0% { box-shadow: 40px 80px 0 cyan, 80px 80px 0 cyan; }
  100% { box-shadow: 40px 130px 0 transparent, 80px 130px 0 transparent; }
}

4. At this point it was quite easy to determine what parts of the code did what, like how the hmtl was purely for the drawing of the characters and clouds while the css was for the animation of everything. I then asked for the AI to work on the characters code some more so that we would have unique hair and more cartoonish bodies:

*html*
<div class="scene">
  <div class="city"></div>
  <!-- DANCER 1 — RED HAIR -->
  <svg class="dancer" id="d1" viewBox="0 0 200 400">
    <!-- Hair -->
    <ellipse cx="100" cy="60" rx="55" ry="40" fill="#d62828"/>
    <!-- Head -->
    <circle cx="100" cy="80" r="35" fill="#f7d9c4"/>
    <!-- Body -->
    <rect x="75" y="120" width="50" height="120" rx="20" fill="#ff6f91"/>
    <!-- Arms -->
    <line x1="75" y1="140" x2="40" y2="220" class="arm arm-left"/>
    <line x1="125" y1="140" x2="160" y2="220" class="arm arm-right"/>
    <!-- Legs -->
    <line x1="90" y1="240" x2="70" y2="340" class="leg leg-left"/>
    <line x1="110" y1="240" x2="130" y2="340" class="leg leg-right"/>
  </svg>
  <!-- DANCER 2 — BLUE HAIR -->
  <svg class="dancer" id="d2" viewBox="0 0 200 400">
    <!-- Hair -->
    <ellipse cx="100" cy="60" rx="55" ry="40" fill="#0077ff"/>
    <!-- Head -->
    <circle cx="100" cy="80" r="35" fill="#f7d9c4"/>
    <!-- Body -->
    <rect x="75" y="120" width="50" height="120" rx="20" fill="#6df3ff"/>
    <!-- Arms -->
    <line x1="75" y1="140" x2="40" y2="220" class="arm arm-left"/>
    <line x1="125" y1="140" x2="160" y2="220" class="arm arm-right"/>
    <!-- Legs -->
    <line x1="90" y1="240" x2="70" y2="340" class="leg leg-left"/>
    <line x1="110" y1="240" x2="130" y2="340" class="leg leg-right"/>
  </svg>
  <div class="cloud cloud1"></div>
  <div class="cloud cloud2"></div>
</div>

*css*
body {
  margin: 0;
  background: #222;
  overflow: hidden;
}
.scene {
  position: relative;
  width: 100vw;
  height: 100vh;
}
/* City background */
.city {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: url('[i.imgur.com](https://i.imgur.com/p5S8W2w.png)') repeat-x;
  background-size: cover;
  animation: cityMove 20s linear infinite;
}
@keyframes cityMove {
  from { background-position: 0 0; }
  to { background-position: -2000px 0; }
}
/* Dancers */
.dancer {
  position: absolute;
  bottom: 20px;
  height: 320px;
  stroke: white;
  stroke-width: 10;
  stroke-linecap: round;
  fill: none;
}
 #d1 { left: 30%; }
 #d2 { left: 60%; }
/* Animations */
.arm-left {
  animation: armLeftMove 1s infinite alternate ease-in-out;
}
.arm-right {
  animation: armRightMove 1s infinite alternate ease-in-out;
}
.leg-left {
  animation: legLeftMove 1s infinite alternate ease-in-out;
}
.leg-right {
  animation: legRightMove 1s infinite alternate ease-in-out;
}
@keyframes armLeftMove {
  0% { transform: rotate(-25deg); transform-origin: 75px 140px; }
  100% { transform: rotate(20deg); transform-origin: 75px 140px; }
}
@keyframes armRightMove {
  0% { transform: rotate(25deg); transform-origin: 125px 140px; }
  100% { transform: rotate(-20deg); transform-origin: 125px 140px; }
}
@keyframes legLeftMove {
  0% { transform: rotate(10deg); transform-origin: 90px 240px; }
  100% { transform: rotate(-10deg); transform-origin: 90px 240px; }
}
@keyframes legRightMove {
  0% { transform: rotate(-10deg); transform-origin: 110px 240px; }
  100% { transform: rotate(10deg); transform-origin: 110px 240px; }
}
/* Clouds */
.cloud {
  position: absolute;
  top: 50px;
  width: 150px;
  height: 80px;
  background: lightgray;
  border-radius: 50%;
  box-shadow: 40px 20px 0 lightgray, 80px 10px 0 lightgray;
}
.cloud1 { left: 25%; animation: rain1 0.4s infinite linear; }
.cloud2 { left: 55%; animation: rain2 0.4s infinite linear; }
/* Rain */
@keyframes rain1 {
  0% { box-shadow: 40px 80px 0 blue, 80px 80px 0 blue; }
  100% { box-shadow: 40px 130px 0 transparent, 80px 130px 0 transparent; }
}
@keyframes rain2 {
  0% { box-shadow: 40px 80px 0 cyan, 80px 80px 0 cyan; }
  100% { box-shadow: 40px 130px 0 transparent, 80px 130px 0 transparent; }
}

5. The image hasnt gotten much better. I mean I can tell slightly who the characters are supposed to be but the background isnt working still and it is a very boring dance that they are doing. I've come this far with the AI so I guess I shall continue... I tried giving the AI a better promt more specific but still simple promt to make the girls more realistic: "yes can you please edit the code so that the hair is long, so that there are sad facial expressions, and so that the one with red hair has a skirt and the one with blue hair has a dress. Also smother dancing cycles and falling raindrops instead of shadow-rain":

*html*
<div class="scene">
  <div class="city"></div>
  <!-- DANCER 1 — LONG RED HAIR, SKIRT, SAD -->
  <svg class="dancer" id="d1" viewBox="0 0 200 400">
    <!-- Long Hair -->
    <path d="M50 40 C20 120 180 120 150 40" fill="#d62828">
      <animate attributeName="d"
        dur="2s" repeatCount="indefinite" 
        values="
          M50 40 C20 120 180 120 150 40;
          M50 40 C30 130 170 130 150 40;
          M50 40 C20 120 180 120 150 40" />
    </path>
    <!-- Head -->
    <circle cx="100" cy="80" r="35" fill="#f7d9c4"/>
    <!-- Sad Eyes -->
    <circle cx="85" cy="75" r="5" fill="#000"/>
    <circle cx="115" cy="75" r="5" fill="#000"/>
    <!-- Sad Mouth -->
    <path d="M80 100 Q100 85 120 100" stroke="#000" stroke-width="4" fill="none"/>
    <!-- Body -->
    <rect x="75" y="120" width="50" height="120" rx="20" fill="#ff6f91"/>
    <!-- Skirt -->
    <path d="M75 240 L125 240 L100 300 Z" fill="#ff3e78"/>
    <!-- Arms -->
    <line x1="75" y1="140" x2="40" y2="220" class="arm arm-left"/>
    <line x1="125" y1="140" x2="160" y2="220" class="arm arm-right"/>
    <!-- Legs -->
    <line x1="90" y1="240" x2="75" y2="350" class="leg leg-left"/>
    <line x1="110" y1="240" x2="125" y2="350" class="leg leg-right"/>
  </svg>
  <!-- DANCER 2 — LONG BLUE HAIR, DRESS, SAD -->
  <svg class="dancer" id="d2" viewBox="0 0 200 400">
    <!-- Long Hair -->
    <path d="M50 40 C20 120 180 120 150 40" fill="#0077ff">
      <animate attributeName="d"
        dur="2s" repeatCount="indefinite" 
        values="
          M50 40 C20 120 180 120 150 40;
          M50 40 C30 140 170 140 150 40;
          M50 40 C20 120 180 120 150 40" />
    </path>
    <!-- Head -->
    <circle cx="100" cy="80" r="35" fill="#f7d9c4"/>
    <!-- Sad Eyes -->
    <circle cx="85" cy="75" r="5" fill="#000"/>
    <circle cx="115" cy="75" r="5" fill="#000"/>
    <!-- Sad Mouth -->
    <path d="M80 100 Q100 85 120 100" stroke="#000" stroke-width="4" fill="none"/>
    <!-- Dress -->
    <path d="M75 120 L125 120 L150 300 L50 300 Z" fill="#6df3ff"/>
    <!-- Arms -->
    <line x1="75" y1="140" x2="40" y2="220" class="arm arm-left"/>
    <line x1="125" y1="140" x2="160" y2="220" class="arm arm-right"/>
    <!-- Legs -->
    <line x1="90" y1="300" x2="75" y2="350" class="leg leg-left"/>
    <line x1="110" y1="300" x2="125" y2="350" class="leg leg-right"/>
  </svg>
  <!-- Rain Layer -->
  <div id="rain"></div>
  <!-- Clouds -->
  <div class="cloud cloud1"></div>
  <div class="cloud cloud2"></div>
</div>

*css*
body {
  margin: 0;
  background: #222;
  overflow: hidden;
}
.scene {
  position: relative;
  width: 100vw;
  height: 100vh;
}
/* City background */
.city {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: url('[i.imgur.com](https://i.imgur.com/p5S8W2w.png)') repeat-x;
  background-size: cover;
  animation: cityMove 20s linear infinite;
}
@keyframes cityMove {
  from { background-position: 0 0; }
  to { background-position: -2000px 0; }
}
/* Dancers */
.dancer {
  position: absolute;
  bottom: 20px;
  height: 340px;
  stroke: white;
  stroke-width: 10;
  stroke-linecap: round;
}
 #d1 { left: 28%; }
 #d2 { left: 60%; }
/* Smooth dance animation */
.arm-left {
  animation: swayLeft 1.8s infinite ease-in-out;
}
.arm-right {
  animation: swayRight 1.8s infinite ease-in-out;
}
.leg-left {
  animation: stepLeft 1.8s infinite ease-in-out;
}
.leg-right {
  animation: stepRight 1.8s infinite ease-in-out;
}
@keyframes swayLeft {
  0% { transform: rotate(-20deg); transform-origin: 75px 140px; }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(-20deg); }
}
@keyframes swayRight {
  0% { transform: rotate(20deg); transform-origin: 125px 140px; }
  50% { transform: rotate(-10deg); }
  100% { transform: rotate(20deg); }
}
@keyframes stepLeft {
  0% { transform: rotate(8deg); transform-origin: 90px 240px; }
  50% { transform: rotate(-8deg); }
  100% { transform: rotate(8deg); }
}
@keyframes stepRight {
  0% { transform: rotate(-8deg); transform-origin: 110px 240px; }
  50% { transform: rotate(8deg); }
  100% { transform: rotate(-8deg); }
}
/* Clouds */
.cloud {
  position: absolute;
  top: 20px;
  width: 180px;
  height: 90px;
  background: lightgray;
  border-radius: 50%;
  box-shadow: 50px 20px 0 lightgray, 100px 10px 0 lightgray;
}
.cloud1 { left: 20%; }
.cloud2 { left: 55%; }
/* Rain */
 #rain {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.raindrop {
  position: absolute;
  width: 3px;
  height: 15px;
  background: cyan;
  animation: drop 0.8s linear infinite;
}
@keyframes drop {
  from { transform: translateY(-10vh); opacity: 1; }
  to { transform: translateY(100vh); opacity: 0; }
}

*javascript*
function createRain() {
  const rain = document.getElementById("rain");
  for (let i = 0; i < 120; i++) {
    const drop = document.createElement("div");
    drop.classList.add("raindrop");
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDelay = Math.random() * 1 + "s";
    drop.style.animationDuration = 0.5 + Math.random() * 0.7 + "s";
    rain.appendChild(drop);
  }
}
createRain();

6. This overcomplicated the machine I could tell because the outcome created some very undescribable shapes and so I asked the AI to revert the code back to the previous alteration... It produced it exactly how it had before. I then was a little nervous about how capable the AI actually was yet I had less time to finish the project than I intended so I went back to the AI with a very simple request: "okay can we make the girls have sad facial expressions and longer hair".

*html*
<div class="scene">
  <div class="city"></div>
  <!-- DANCER 1 — RED HAIR, SKIRT, SAD -->
  <svg class="dancer" id="d1" viewBox="0 0 200 400">
    
    <!-- Longer Red Hair -->
    <path d="M45 40 C20 140 180 140 155 40" fill="#d62828"/>
    <!-- Head -->
    <circle cx="100" cy="80" r="35" fill="#f7d9c4"/>
    <!-- Sad Eyes -->
    <circle cx="85" cy="70" r="5" fill="black"/>
    <circle cx="115" cy="70" r="5" fill="black"/>
    <!-- Sad Mouth -->
    <path d="M80 100 Q100 85 120 100" stroke="black" stroke-width="4" fill="none"/>
    <!-- Body -->
    <rect x="75" y="120" width="50" height="120" rx="20" fill="#ff6f91"/>
    <!-- Skirt -->
    <path d="M75 240 L125 240 L100 300 Z" fill="#ff3e78"/>
    <!-- Arms -->
    <line x1="75" y1="140" x2="40" y2="220" class="arm arm-left"/>
    <line x1="125" y1="140" x2="160" y2="220" class="arm arm-right"/>
    <!-- Legs -->
    <line x1="90" y1="240" x2="70" y2="340" class="leg leg-left"/>
    <line x1="110" y1="240" x2="130" y2="340" class="leg leg-right"/>
  </svg>
  <!-- DANCER 2 — BLUE HAIR, DRESS, SAD -->
  <svg class="dancer" id="d2" viewBox="0 0 200 400">
    <!-- Longer Blue Hair -->
    <path d="M45 40 C20 150 180 150 155 40" fill="#0077ff"/>
    <!-- Head -->
    <circle cx="100" cy="80" r="35" fill="#f7d9c4"/>
    <!-- Sad Eyes -->
    <circle cx="85" cy="70" r="5" fill="black"/>
    <circle cx="115" cy="70" r="5" fill="black"/>
    <!-- Sad Mouth -->
    <path d="M80 100 Q100 85 120 100" stroke="black" stroke-width="4" fill="none"/>
    <!-- Dress -->
    <path d="M75 120 L125 120 L150 300 L50 300 Z" fill="#6df3ff"/>
    <!-- Arms -->
    <line x1="75" y1="140" x2="40" y2="220" class="arm arm-left"/>
    <line x1="125" y1="140" x2="160" y2="220" class="arm arm-right"/>
    <!-- Legs -->
    <line x1="90" y1="300" x2="70" y2="350" class="leg leg-left"/>
    <line x1="110" y1="300" x2="130" y2="350" class="leg leg-right"/>
  </svg>
  <div class="cloud cloud1"></div>
  <div class="cloud cloud2"></div>
</div>

*css*
body {
  margin: 0;
  background: #222;
  overflow: hidden;
}
.scene {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.city {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: url('[i.imgur.com](https://i.imgur.com/p5S8W2w.png)') repeat-x;
  background-size: cover;
  animation: cityMove 20s linear infinite;
}
@keyframes cityMove {
  from { background-position: 0 0; }
  to { background-position: -2000px 0; }
}
.dancer {
  position: absolute;
  bottom: 20px;
  height: 320px;
  stroke: white;
  stroke-width: 10;
  stroke-linecap: round;
}
 #d1 { left: 30%; }
 #d2 { left: 60%; }
.arm-left {
  animation: armLeftMove 1s infinite alternate ease-in-out;
}
.arm-right {
  animation: armRightMove 1s infinite alternate ease-in-out;
}
.leg-left {
  animation: legLeftMove 1s infinite alternate ease-in-out;
}
.leg-right {
  animation: legRightMove 1s infinite alternate ease-in-out;
}
@keyframes armLeftMove {
  0% { transform: rotate(-25deg); transform-origin: 75px 140px; }
  100% { transform: rotate(20deg); transform-origin: 75px 140px; }
}
@keyframes armRightMove {
  0% { transform: rotate(25deg); transform-origin: 125px 140px; }
  100% { transform: rotate(-20deg); transform-origin: 125px 140px; }
}
@keyframes legLeftMove {
  0% { transform: rotate(10deg); transform-origin: 90px 240px; }
  100% { transform: rotate(-10deg); transform-origin: 90px 240px; }
}
@keyframes legRightMove {
  0% { transform: rotate(-10deg); transform-origin: 110px 240px; }
  100% { transform: rotate(10deg); transform-origin: 110px 240px; }
}
.cloud {
  position: absolute;
  top: 50px;
  width: 150px;
  height: 80px;
  background: lightgray;
  border-radius: 50%;
  box-shadow: 40px 20px 0 lightgray, 80px 10px 0 lightgray;
}
.cloud1 { left: 25%; animation: rain1 0.4s infinite linear; }
.cloud2 { left: 55%; animation: rain2 0.4s infinite linear; }
@keyframes rain1 {
  0% { box-shadow: 40px 80px 0 blue, 80px 80px 0 blue; }
  100% { box-shadow: 40px 130px 0 transparent, 80px 130px 0 transparent; }
}
@keyframes rain2 {
  0% { box-shadow: 40px 80px 0 cyan, 80px 80px 0 cyan; }
  100% { box-shadow: 40px 130px 0 transparent, 80px 130px 0 transparent; }
}

7. The code was still quite easy for me to read and understand so I didn't feel like I was necisarily cheeting. The only thing I didn't really understand was the background code and why it was trying to reference a url of sorts. I decided to ignore this and come back to it later. I was definitely still engraining some of the basic drawing and animation coding principals so I asked the AI: "even longer hair and fix the weird triangle that is supposed to be a skirt on the red haired girl"

*html*
<div class="scene">
  <div class="city"></div>
  <!-- DANCER 1 — RED HAIR, SKIRT, SAD -->
  <svg class="dancer" id="d1" viewBox="0 0 200 400">
    <!-- EVEN LONGER RED HAIR -->
    <path d="M40 30 
             C10 180 190 180 160 30 
             C150 20 130 10 100 15 
             C70 10 50 20 40 30"
          fill="#d62828"/>
    <!-- Head -->
    <circle cx="100" cy="80" r="35" fill="#f7d9c4"/>
    <!-- Sad Eyes -->
    <circle cx="85" cy="70" r="5" fill="black"/>
    <circle cx="115" cy="70" r="5" fill="black"/>
    <!-- Sad Mouth -->
    <path d="M80 100 Q100 85 120 100" stroke="black" stroke-width="4" fill="none"/>
    <!-- Body -->
    <rect x="75" y="120" width="50" height="120" rx="20" fill="#ff6f91"/>
    <!-- FIXED SKIRT (CLEAN SHAPE) -->
    <path d="
      M75 240
      Q100 270 125 240
      L140 300
      Q100 330 60 300
      Z"
      fill="#ff3e78"/>
    <!-- Arms -->
    <line x1="75" y1="140" x2="40" y2="220" class="arm arm-left"/>
    <line x1="125" y1="140" x2="160" y2="220" class="arm arm-right"/>
    <!-- Legs -->
    <line x1="90" y1="240" x2="70" y2="340" class="leg leg-left"/>
    <line x1="110" y1="240" x2="130" y2="340" class="leg leg-right"/>
  </svg>
  <!-- DANCER 2 — BLUE HAIR, DRESS, SAD -->
  <svg class="dancer" id="d2" viewBox="0 0 200 400">
    <!-- EVEN LONGER BLUE HAIR -->
    <path d="M40 30 
             C10 200 190 200 160 30 
             C150 20 130 10 100 15 
             C70 10 50 20 40 30"
          fill="#0077ff"/>
    <!-- Head -->
    <circle cx="100" cy="80" r="35" fill="#f7d9c4"/>
    <!-- Sad Eyes -->
    <circle cx="85" cy="70" r="5" fill="black"/>
    <circle cx="115" cy="70" r="5" fill="black"/>
    <!-- Sad Mouth -->
    <path d="M80 100 Q100 85 120 100" stroke="black" stroke-width="4" fill="none"/>
    <!-- Dress -->
    <path d="M75 120 L125 120 L150 300 L50 300 Z" fill="#6df3ff"/>
    <!-- Arms -->
    <line x1="75" y1="140" x2="40" y2="220" class="arm arm-left"/>
    <line x1="125" y1="140" x2="160" y2="220" class="arm arm-right"/>
    <!-- Legs -->
    <line x1="90" y1="300" x2="70" y2="350" class="leg leg-left"/>
    <line x1="110" y1="300" x2="130" y2="350" class="leg leg-right"/>
  </svg>
  <div class="cloud cloud1"></div>
  <div class="cloud cloud2"></div>
</div>

8. The last prompt was purely to do with the character creation so only html was effected. I asked for another simple html edit, if the skirts could be attatched to the body more, it told me to edit this specific line of code that determined the placement of the skirt:

*html*
<path d="
  M75 240
  Q100 250 125 240
  L135 300
  Q100 320 65 300
  Z"
  fill="#ff3e78"/>
  
9. I then asked it to make the clouds less in the girls faces. It told me to edit the specific line of css code that determined the clouds placement:

*css*
.cloud {
  position: absolute;
  top: -10px;   /* moved upward */
  width: 150px;
  height: 80px;
  background: lightgray;
  border-radius: 50%;
  box-shadow: 40px 20px 0 lightgray, 80px 10px 0 lightgray;
}

10. I then asked it to add lightening, make the raindrops more realistic, and to give the girls microphones in their hands but this made the image really messy and the microphone code wasn't attatching the microphones to the hands properly. I ran out of time and realized I should emmit those changes and go back to the last final edit from number 9. I felt that I kind of failed at fullfilling the prompt I had created for this assignment. I felt that I should have definetly spent more time on this project and probably rely on AI less in the future. I did however feel I gained a stronger sense of code drawing and animation which I think is cool and could be useful in the future. I enjoyed this class very much despite its immense difficulty. Thank you Rachel! 



##Final code implemented:

1. Final html code:

<div class="scene">
  <div class="city"></div>
  <!-- DANCER 1 — RED HAIR, SKIRT, SAD -->
  <svg class="dancer" id="d1" viewBox="0 0 200 400">
    <!-- EVEN LONGER RED HAIR -->
    <path d="M40 30 
             C10 180 190 180 160 30 
             C150 20 130 10 100 15 
             C70 10 50 20 40 30"
          fill="#d62828"/>
    <!-- Head -->
    <circle cx="100" cy="80" r="35" fill="#f7d9c4"/>
    <!-- Sad Eyes -->
    <circle cx="85" cy="70" r="5" fill="black"/>
    <circle cx="115" cy="70" r="5" fill="black"/>
    <!-- Sad Mouth -->
    <path d="M80 100 Q100 85 120 100" stroke="black" stroke-width="4" fill="none"/>
    <!-- Body -->
    <rect x="75" y="120" width="50" height="120" rx="20" fill="#ff6f91"/>
=
    <!-- Arms -->
    <line x1="75" y1="140" x2="40" y2="220" class="arm arm-left"/>
    <line x1="125" y1="140" x2="160" y2="220" class="arm arm-right"/>
    <!-- Legs -->
    <line x1="90" y1="240" x2="70" y2="340" class="leg leg-left"/>
    <line x1="110" y1="240" x2="130" y2="340" class="leg leg-right"/>
  </svg>
  <!-- DANCER 2 — BLUE HAIR, DRESS, SAD -->
  <svg class="dancer" id="d2" viewBox="0 0 200 400">
    <!-- EVEN LONGER BLUE HAIR -->
    <path d="M40 30 
             C10 200 190 200 160 30 
             C150 20 130 10 100 15 
             C70 10 50 20 40 30"
          fill="#0077ff"/>
    <!-- Head -->
    <circle cx="100" cy="80" r="35" fill="#f7d9c4"/>
    <!-- Sad Eyes -->
    <circle cx="85" cy="70" r="5" fill="black"/>
    <circle cx="115" cy="70" r="5" fill="black"/>
    <!-- Sad Mouth -->
    <path d="M80 100 Q100 85 120 100" stroke="black" stroke-width="4" fill="none"/>
    <!-- Dress -->
    <path d="M75 120 L125 120 L150 300 L50 300 Z" fill="#6df3ff"/>
    <!-- Arms -->
    <line x1="75" y1="140" x2="40" y2="220" class="arm arm-left"/>
    <line x1="125" y1="140" x2="160" y2="220" class="arm arm-right"/>
    <!-- Legs -->
    <line x1="90" y1="300" x2="70" y2="350" class="leg leg-left"/>
    <line x1="110" y1="300" x2="130" y2="350" class="leg leg-right"/>
  </svg>
  <div class="cloud cloud1"></div>
  <div class="cloud cloud2"></div>
</div>

2. Final CSS code:

body {
  margin: 0;
  background: #222;
  overflow: hidden;
}
.scene {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.city {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: url('[i.imgur.com](https://i.imgur.com/p5S8W2w.png)') repeat-x;
  background-size: cover;
  animation: cityMove 20s linear infinite;
}
@keyframes cityMove {
  from { background-position: 0 0; }
  to { background-position: -2000px 0; }
}
.dancer {
  position: absolute;
  bottom: 20px;
  height: 320px;
  stroke: white;
  stroke-width: 10;
  stroke-linecap: round;
}
 #d1 { left: 30%; }
 #d2 { left: 60%; }
.arm-left {
  animation: armLeftMove 1s infinite alternate ease-in-out;
}
.arm-right {
  animation: armRightMove 1s infinite alternate ease-in-out;
}
.leg-left {
  animation: legLeftMove 1s infinite alternate ease-in-out;
}
.leg-right {
  animation: legRightMove 1s infinite alternate ease-in-out;
}
@keyframes armLeftMove {
  0% { transform: rotate(-25deg); transform-origin: 75px 140px; }
  100% { transform: rotate(20deg); transform-origin: 75px 140px; }
}
@keyframes armRightMove {
  0% { transform: rotate(25deg); transform-origin: 125px 140px; }
  100% { transform: rotate(-20deg); transform-origin: 125px 140px; }
}
@keyframes legLeftMove {
  0% { transform: rotate(10deg); transform-origin: 90px 240px; }
  100% { transform: rotate(-10deg); transform-origin: 90px 240px; }
}
@keyframes legRightMove {
  0% { transform: rotate(-10deg); transform-origin: 110px 240px; }
  100% { transform: rotate(10deg); transform-origin: 110px 240px; }
}
.cloud {
  position: absolute;
  top: -10px;   /* moved upward */
  width: 150px;
  height: 80px;
  background: lightgray;
  border-radius: 50%;
  box-shadow: 40px 20px 0 lightgray, 80px 10px 0 lightgray;
}
.cloud1 { left: 25%; animation: rain1 0.4s infinite linear; }
.cloud2 { left: 55%; animation: rain2 0.4s infinite linear; }
@keyframes rain1 {
  0% {
    box-shadow:
      10px 90px 0 rgba(0,150,255,0.9),
      30px 80px 0 rgba(0,150,255,0.9),
      60px 95px 0 rgba(0,150,255,0.9),
      90px 85px 0 rgba(0,150,255,0.9);
  }
  100% {
    box-shadow:
      10px 150px 0 rgba(0,150,255,0),
      30px 155px 0 rgba(0,150,255,0),
      60px 160px 0 rgba(0,150,255,0),
      90px 152px 0 rgba(0,150,255,0);
  }
}
@keyframes rain2 {
  0% {
    box-shadow:
      10px 90px 0 rgba(0,255,255,0.9),
      35px 82px 0 rgba(0,255,255,0.9),
      70px 94px 0 rgba(0,255,255,0.9),
      100px 88px 0 rgba(0,255,255,0.9);
  }
  100% {
    box-shadow:
      10px 150px 0 rgba(0,255,255,0),
      35px 155px 0 rgba(0,255,255,0),
      70px 160px 0 rgba(0,255,255,0),
      100px 152px 0 rgba(0,255,255,0);
  }
}

3. Final Javascript code:

none