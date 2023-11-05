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
        y -= 20;
        isKeyPressed = true;
    } else if (e.key == "ArrowDown") {
        y += 20;
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
        if (!isKeyPressed) {
            y += gravity;
        }
        // Indicates if there is a collision or superate the limitE
        if (y + images.wings_up.height >= canvas.height + 5) {
            clearInterval(intervalID);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            gameOver();
            //showContent();
            getObstacles();
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
    }, 100);
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

/*
function draw_pipelines(pipelineX) {
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 40; j++) {
            if (M[i][j] != -1) {
                ctx.drawImage(images.pipeline, 
					(M[i][j]%6)*32, (Math.floor(M[i][j]/6))*32,
					32 , 32,
                    // The parameter j*32 is changing all time because this is the controller of the x
					(j*32)+pipelineX, i*32,
					32, 32);
                    help = j*32+pipelineX;
            }
            // console.log("Painting!");
        }
    }
} 
*/

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

function getObstacles() {
    for (i = 0; i < 20; i ++) {
        for (j = 0; j < 20; j ++) {
            if (E[i][j] != -1) {
                console.log(E[i][j] + ",");
            }
        }
    }
}

function getPipesUno() {
    E[0][19] = M[0][0];
    E[1][19] = M[1][0];
    E[2][19] = M[2][0];
    E[3][19] = M[3][0];

    E[13][19] = M[13][0];
    E[14][19] = M[14][0];
    E[15][19] = M[15][0];
    E[16][19] = M[16][0];
    E[17][19] = M[17][0];
    E[18][19] = M[18][0];
    E[19][19] = M[19][0];
}

function getPipesDos() {
    E[0][18] = M[0][0];
    E[0][19] = M[0][1];
    E[1][18] = M[1][0];
    E[1][19] = M[1][1];
    E[2][18] = M[2][0];
    E[2][19] = M[2][1];
    E[3][18] = M[3][0];
    E[3][19] = M[3][1];

    E[13][18] = M[13][0];
    E[13][19] = M[13][1];
    E[14][18] = M[14][0];
    E[14][19] = M[14][1];
    E[15][18] = M[15][0];
    E[15][19] = M[15][1];
    E[16][18] = M[16][0];
    E[16][19] = M[16][1];
    E[17][18] = M[17][0];
    E[17][19] = M[17][1];
    E[18][18] = M[18][0];
    E[18][19] = M[18][1];
    E[19][18] = M[19][0];
    E[19][19] = M[19][1];
}

function getPipesTres() {
    E[0][17] = M[0][0];
    E[0][18] = M[0][1];
    E[0][19] = M[0][2];

    E[1][17] = M[1][0];
    E[1][18] = M[1][1];
    E[1][19] = M[1][2];

    E[2][17] = M[2][0];
    E[2][18] = M[2][1];
    E[2][19] = M[2][2];

    E[3][17] = M[3][0];
    E[3][18] = M[3][1];
    E[3][19] = M[3][2];

    E[13][17] = M[13][0];
    E[13][18] = M[13][1];
    E[13][19] = M[13][2];

    E[14][17] = M[14][0];
    E[14][18] = M[14][1];
    E[14][19] = M[14][2];
    
    E[15][17] = M[15][0];
    E[15][18] = M[15][1];
    E[15][19] = M[15][2];
    
    E[16][17] = M[16][0];
    E[16][18] = M[16][1];
    E[16][19] = M[16][2];
    
    E[17][17] = M[17][0];
    E[17][18] = M[17][1];
    E[17][19] = M[17][2];
    
    E[18][17] = M[18][0];
    E[18][18] = M[18][1];
    E[18][19] = M[18][2];
    
    E[19][17] = M[19][0];
    E[19][18] = M[19][1];
    E[19][19] = M[19][2];
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