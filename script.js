// ----------------------------
// ---------- Canvas ----------
// ----------------------------
const canvas = document.getElementById("animation");
const ctx = canvas.getContext('2d');

// ------------------------------
// ------- Sources images -------
// ------------------------------
const images = {
    wings_down: new Image(),
    wings_up: new Image(),
    wings_less: new Image(),
    pipeline: new Image(),
    game_over_sign: new Image(),
};

images.wings_down.src = "img/pngegg (3).png";
images.wings_up.src = "img/pngegg (4).png";
images.wings_less.src = "img/pngegg (14).png";
images.pipeline.src = "img/tubup.png";
images.game_over_sign.src = "img/game_over_sign.png";

// ---------------------------------
// -------- Bird's Settings --------
// ---------------------------------
let y = canvas.height/2-images.wings_down.height/2;
let gravity = 4;
let gcounter = 0;
let flap = true;
let isKeyPressed = false;
// Column's counter
let k = 0;
// Grid positions
let position0 = 9;
let position1 = 10;
let collision = false;

// ------------------------------
// ---------- Arrays ------------
// ------------------------------
// Origin Array
var M = [];
for (i = 0; i < 20; i++ ){
	M[i] = new Array (40);
	for (j = 0; j < 40; j++)
		M[i][j] = -1;
}

// Destiny Array
var E = []
for (i = 0; i < 20; i++) {
    E[i] = new Array (20);
    for (j = 0; j < 20; j++) {
        E[i][j] = -1;
    }
}

// ------------------------
// ------  Levels ---------
// ------------------------
const level = {
    one: "6 7 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 6 7 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 0 1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1",
}

// -------------------------
// -------- Events ---------
//--------------------------
// Controls
document.addEventListener("keydown", (e) => {
    if(e.key == "ArrowUp") {
        y -= 32;
        position0 -= 1;
        position1 -= 1;
        isKeyPressed = true;
    } else if (e.key == "ArrowDown") {
        y += 32;
        position0 += 1;
        position1 += 1;
        isKeyPressed = true;
    }
});

// Gravity
document.addEventListener("keyup", (e) => {
    isKeyPressed = false; 
});

// -------------------------------------
// ------- Previous Settings -----------
// -------------------------------------
dataToStringToArray(level.one);

// -------------------------------------
// ----------- Start Game --------------
// -------------------------------------
images.wings_down.onload = startGame();

// Loop game
function startGame() {
    var intervalID = setInterval(function() {
        

        // --- Gravity -------
        if (!isKeyPressed) {
            y += gravity;
            gcounter += gravity;
            if (gcounter == 32) {
                position0 += 1;
                position1 += 1;
                gcounter = 0;
            }
        }
        
        // ------ Stopping condition --------
        if (y + images.wings_up.height >= canvas.height + 5 || collision) {
            // -------- End Game ---------
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            clearInterval(intervalID);
            drawPipelines();
            gameOver();
        } else if (y + images.wings_up.height < 0 || y + images.wings_down.height < 0) {
            // ------- Upper Limit ---------
            y = 32;
            position0 = 0;
            position1 = 1;
        }
        
        // ------ Main Loop --------
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Debuging
        middle();
        drawBird(y);
        drawObstacles(k);
        if (k >= 39)
            k = 0;
        else
            k++;
        // Gets the position
        getColission();
        debugCollision();
    }, 60);
}

// -------------------------------------------------
// -------------- Array's Operations ---------------
// -------------------------------------------------
// Copy an array to another array by columns
function drawObstacles(k) {
    for (let i = 0; i < 20; i++) {
        E[i][19] = M[i][k];
    }
    updatePipes();
    drawPipelines();  
}

// Loop through the columns of an array
function updatePipes() {
    for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
            if (j < 20) {
                E[i][j] = E[i][j+1];
            } else {
                E[i][j] = -1;
            }
        }
    }
}

// Gets data from the string
function dataToStringToArray(string) {
    let lines = string.split(/ /);
    for(i=0 ; i < 800 ; i++){
		M[Math.floor(i/40)][i%40] = parseInt(lines[i]);
	}
}

function getColission() {
    // 10 and 11 are consts
    if (E[position0][9] != -1) {
        collision = true;
    } else if (E[position0][10] != -1) {
        collision = true;
    } else if (E[position1][9] != -1) {
        collision = true;
    } else if (E[position1][10] != -1) {
        collision = true;
    } else {
        return false;
    }
}

// ---------------------------------------------
// ------------ Drawing Functions --------------
// ---------------------------------------------
function drawBird(y) {
    // Changes in orden to y
    if (flap) {
        ctx.drawImage(images.wings_down, canvas.width/2-images.wings_down.width/2, y);
    } else {
        ctx.drawImage(images.wings_up, canvas.width/2-images.wings_up.width/2, y);
    }
    flap = !flap; // Alternate beetwen the state var
}

// Draw the array E
function drawPipelines() {
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 20; j++) {
            if (E[i][j] != -1) {
                ctx.drawImage(images.pipeline, 
					(E[i][j]%6)*32, (Math.floor(E[i][j]/6))*32,
					32 , 32,
					j*32, i*32,
					32, 32);
            }
        }
    }
}

// ---------------------------------
// ---------- End Game -------------
// ---------------------------------
function gameOver() {
    images.wings_less.onload = () => {
        ctx.clearRect(canvas.width/2-images.wings_up.width/2, y, images.wings_up.width, images.wings_up.height);
        ctx.drawImage(images.wings_less, canvas.width/2-images.wings_up.width/2, y);
        drawText("Game Over!");
    }
    images.wings_less.src = "img/pngegg (14).png";
}

function drawText(text) {
    ctx.font = "32px 'Press Start 2P', bold";
    ctx.fillStyle = "black";
    const textWidth = ctx.measureText(text).width;
    const x = (canvas.width - textWidth) / 2;
    ctx.fillText(text, x, 60);
}

// -------------------------
// ------- Design ----------
// -------------------------
// Show grid
function middle() {
    for(i=0; i<=40; i++){
		ctx.moveTo(i*32,0)
		ctx.lineTo(i*32,640)
		ctx.stroke()
	}

    for(i=0; i<=20; i++){
		ctx.moveTo(0, i*32)
		ctx.lineTo(640, i*32)
		ctx.stroke()
	}
}

// Auxiliary function tho show the spaces of the array isn't empty
function isNotEmpty() {
    for (i = 0; i < 20; i ++) {
        for (j = 0; j < 40; j ++) {
            if (M[i][j] != -1) {
                console.log("Position: " + "[" + i + "][" + j + "]");
            }
        }
    }
}

function showContent() {
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 40; j++) {
            console.log(M[i][j]);
        }
    }
}

function getPipes() {
    for (j = 0; j < 20; j++) {
        for ( i = 0; i < 1; i++) {
            console.log(`E[${i}][${j}]`+E[i][j]);
        }
    }
}

function debugCollision() {
    console.log("Y: " + y);
    console.log("P0: " + position0);
    console.log("P1: " + position1);
}