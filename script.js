// Variables
const canvas = document.getElementById("animation");
const ctx = canvas.getContext('2d');

// Sources images
const images = {
    wings_down: new Image(),
    wings_up: new Image(),
    wings_less: new Image(),
    pipeline: new Image(),
    game_over_sign: new Image(),
};

images.wings_down.src = "pngegg (3).png";
images.wings_up.src = "pngegg (4).png";
images.wings_less.src = "pngegg (14).png";
images.pipeline.src = "tubup.png";
images.game_over_sign.src = "game_over_sign.png";

// Settings
let y = canvas.height/2-images.wings_down.height/2;
let gravity = 4;
let isKeyPressed = false;
let flap = true;
let k = 0;
// Drawing start position on x
// let pipelineX = 700;
// let help = 0;

// Positions
let position0 = 9;
let position1 = 10;


// Matriz pipelines
var M = [];
for (i = 0; i < 20; i++ ){
	M[i] = new Array (40);
	for (j = 0; j < 40; j++)
		M[i][j] = -1;
}

var E = []
for (i = 0; i < 20; i++) {
    E[i] = new Array (20);
    for (j = 0; j < 20; j++) {
        E[i][j] = -1;
    }
}

// Levels
const level = {
    one: "12 13 -1 -1 -1 -1 -1 -1 -1 -1 6 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 12 13 -1 -1 -1 -1 -1 -1 -1 -1 6 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 12 13 -1 -1 -1 -1 -1 -1 -1 -1 0 1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 0 1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 30 19 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 0 1 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 30 19 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 30 31 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 30 19 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 30 31 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 30 19 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 30 31 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 30 19 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 30 31 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 30 19 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 30 31 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 30 19 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6 30 31 -1 -1 -1 -1 -1 -1 -1 -1 12 13 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 30 19 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 6",
}
// Events
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

// Know if a key is up
document.addEventListener("keyup", (e) => {
    isKeyPressed = false; 
});

dataToStringToArray(level.one);
// isNotEmpty();
//getObstacles();
//getPipes();

images.wings_down.onload = startGame();

function startGame() {
    // y : coordinate y bird
    var intervalID = setInterval(function() {
        // Gravity is actived when !isKeyPressed
        
        //if (!isKeyPressed) {
        //    y += gravity;
        //}
        // Indicates if there is a collision or superate the limitE
        if (y + images.wings_up.height >= canvas.height + 5) {
            clearInterval(intervalID);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            gameOver();
            //showContent();
            //getObstacles();
            draw_pipelines();
        } else if (y + images.wings_up.height < 0 || y + images.wings_down.height < 0) {
            y = 10;
            
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // draw_pipelines(pipelineX);
        draw(y);
        draw_pipelines();
        getColumn(k);
        if (k > 40) {
            k = 0;
        } else {
            k++;
        }
        /*
        if (pipelineX == -1280) {
            pipelineX = 700;
        } else {
            // Decrements the position also could be the speed of displacement = 20
            pipelineX -= 20;
        }
        */
        // console.log("x: " + pipelineX);
        // console.log(help);
        middle();

        // Gets the position
        setPosition();
    }, 60);
}

// Changes in orden to y
function draw(y) {
    if (flap) {
        ctx.drawImage(images.wings_down, canvas.width/2-images.wings_down.width/2, y);
    } else {
        ctx.drawImage(images.wings_up, canvas.width/2-images.wings_up.width/2, y);
    }
    flap = !flap; // Alternate beetwen the state var
}


function gameOver() {
    
    images.wings_less.onload = () => {
        ctx.clearRect(canvas.width/2-images.wings_up.width/2, y, images.wings_up.width, images.wings_up.height);
        ctx.drawImage(images.wings_less, canvas.width/2-images.wings_up.width/2, y);
        draw_text("Game Over!");
    }
    images.wings_less.src = "pngegg (14).png";
}

function draw_text(text) {
    ctx.font = "32px 'Press Start 2P', bold";
    ctx.fillStyle = "black";
    // Measure the text width
    const textWidth = ctx.measureText(text).width;
    // Calculate the X coordinate to center the text
    const x = (canvas.width - textWidth) / 2;
    // Parameters text position: x y
    ctx.fillText(text, x, 60);
}

function dataToStringToArray(string) {
    let lines = string.split(/ /);
    for(i=0 ; i < 800 ; i++){//Porque el escenario es de 40 col x 20 filas. Carga la matriz en M
		M[Math.floor(i/40)][i%40] = parseInt(lines[i]); //Convierte a Entero
	}
}

function showContent() {
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 40; j++) {
            console.log(M[i][j]);
        }
    }
}

function draw_pipelines() {
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 20; j++) {
            if (E[i][j] != -1) {
                ctx.drawImage(images.pipeline, 
					(E[i][j]%6)*32, (Math.floor(E[i][j]/6))*32,
					32 , 32,
                    // The parameter j*32 is changing all time because this is the controller of the x
					j*32, i*32,
					32, 32);
            }
            // console.log("Painting!");
        }
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

function getPipes() {
    for (j = 0; j < 20; j++) {
        for ( i = 0; i < 1; i++) {
            console.log(`E[${i}][${j}]`+E[i][j]);
        }
    }
}

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

/*
function getColumn() {
    k = 19;
    for (let j = 0; j < 40; j++) { // Recorre las columnas
        for (let i = 0; i < 20; i++) { // Recorre las filas
            if (M[i][j] != -1) {
                console.log("E["+i+"]["+k+"] ="+" M["+i+"]["+j+"]: " + M[i][j]);
            }
        }
    }
}
*/

// No cuenta con limpiarla
function getColumn(k) {
    for (let i = 0; i < 20; i++) {
        E[i][19] = M[i][k];
    }
    updatePipes();  
}

function middle() {
    /*
    ctx.moveTo(9*32, 0);
    ctx.lineTo(9*32, 640);
    ctx.stroke();

    ctx.moveTo(10*32, 0);
    ctx.lineTo(10*32, 640);
    ctx.stroke();

    ctx.moveTo(11*32, 0);
    ctx.lineTo(11*32, 640);
    ctx.stroke();
    */
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

function setPosition() {
    console.log("Coordinate: " + y);
    console.log("Positions: " + position0 + "," + position1)

}