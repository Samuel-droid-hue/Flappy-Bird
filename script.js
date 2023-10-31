const canvas = document.getElementById("animacion");
const ctx = canvas.getContext('2d');

const images = {
    wings_down: new Image(),
    wings_up: new Image(),
    wings_less: new Image(),
};

images.wings_down.src = "pngegg (3).png";
images.wings_up.src = "pngegg (4).png";
images.wings_less.src = "pngegg (14).png";

// Variables
// Counter
// Remember when i++ bird go down
//               i-- bird go up
//var i = 0
let y = canvas.height/2-images.wings_down.height/2;
let gravity = 4;
let isKeyPressed = false;
let flap = true; // Variable to alternate beetwen pictures


// Matriz escenario
var M = [];
for (j = 0; j < 20; j++ ){
	M[j] = new Array (40);
	for (i = 0; i < 40; i++)
		M[j][i] = -1;
}

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
            gameOver();
        } else if (y + images.wings_up.height < 0 || y + images.wings_down.height < 0) {
            y = 10;
        }
        draw(y);
    }, 100);
}

// Changes in orden to y
function draw(y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (flap) {
        ctx.drawImage(images.wings_down, canvas.width/2-images.wings_down.width/2, y);
    } else {
        ctx.drawImage(images.wings_up, canvas.width/2-images.wings_up.width/2, y);
    }
    flap = !flap; // Alternate beetwen the state var
}


function gameOver() {
    images.wings_less.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images.wings_less, canvas.width/2-images.wings_up.width/2, y);
        draw_text("Game Over!");
    }
    images.wings_less.src = "pngegg (14).png";
    console.log("Game Over!");
}

function draw_text(text) {
    ctx.font = "32px Pacifico, cursive";
    ctx.fillStyle = "black";
    // Measure the text width
    const textWidth = ctx.measureText(text).width;
    // Calculate the X coordinate to center the text
    const x = (canvas.width - textWidth) / 2;
    // Parameters text position: x y
    ctx.fillText(text, x, 60);
    console.log(text.width);
    console.log("Writing...");
}

