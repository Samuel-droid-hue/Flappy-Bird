// Variables
const canvas = document.getElementById("animation");
const ctx = canvas.getContext('2d');

// Sources images
const images = {
    wings_down: new Image(),
    wings_up: new Image(),
    wings_less: new Image(),
    pipeline: new Image(),
};

images.wings_down.src = "pngegg (3).png";
images.wings_up.src = "pngegg (4).png";
images.wings_less.src = "pngegg (14).png";
images.pipeline.src = "tubup.png";

// Settings
let y = canvas.height/2-images.wings_down.height/2;
let gravity = 4;
let isKeyPressed = false;
let flap = true;

// Matriz pipelines
var layout = [];
for (i = 0; i < 20; i++ ){
	layout[i] = new Array (40);
	for (j = 0; j < 40; j++)
		layout[i][j] = -1;
}

// Levels
const level = {
    one: "-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1",
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

images.wings_down.onload = startGame();

function startGame() {
    // y : coordinate y bird
    var intervalID = setInterval(function() {
        // Gravity is actived when !isKeyPressed
        if (!isKeyPressed) {
            y += gravity;
        }
        // Indicates if there is a collision or superate the limit
        if (y + images.wings_up.height >= canvas.height + 5) {
            clearInterval(intervalID);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            gameOver();
            showContent();
            draw_pipelines();
        } else if (y + images.wings_up.height < 0 || y + images.wings_down.height < 0) {
            y = 10;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw_pipelines();
        draw(y);
        
        //line();
        // The file is working!
        //console.log(images.pipeline.src);
        //console.log(images.pipeline.width);
        //console.log(images.pipeline.height);
        
        // Writting the level one
        console.log("LEVEL-ONE");
        //console.log(level.one);
        //console.log("-----------------------");
        showContent();
        //drawOnlyImage();
    }, 100);
}

// Changes in orden to y
function draw(y) {
    console.log("Flying!!")
    
    if (flap) {
        ctx.drawImage(images.wings_down, canvas.width/2-images.wings_down.width/2, y);
    } else {
        ctx.drawImage(images.wings_up, canvas.width/2-images.wings_up.width/2, y);
    }
    flap = !flap; // Alternate beetwen the state var
}


function gameOver() {
    
    images.wings_less.onload = () => {
        ctx.drawImage(images.wings_less, canvas.width/2-images.wings_up.width/2, y);
        draw_text("Game Over!");
    }
    images.wings_less.src = "pngegg (14).png";
    console.log("Game Over!");
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
    console.log(text.width);
    console.log("Writing...");
    // IMPORTANT!
    // Execute inside this function if is not working!
}

// There somenting type of mistake on this function because is working 
// if before there is a ctx.clearRect()
function line() {
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 100);
    ctx.stroke();
}

function dataToStringToArray(string) {
    let lines = string.split(/ /);
    for(i=0 ; i < 800 ; i++){//Porque el escenario es de 40 col x 20 filas. Carga la matriz en M
		layout[Math.floor(i/40)][i%40] = parseInt(lines[i]); //Convierte a Entero
	}
}

function showContent() {
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 40; j++) {
            console.log(layout[i][j]);
        }
    }
}

function draw_pipelines() {
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 40; j++) {
            if (layout[i][j] != -1) {
                ctx.drawImage(images.pipeline, 
					(layout[i][j]%6)*32, (Math.floor(layout[i][j]/6))*32,
					32 , 32,
					j*32, i*32,
					32, 32);
            }
            console.log("Painting!");
        }
    }
}

function drawOnlyImage() {
    ctx.drawImage(images.pipeline, 0, 0);
}