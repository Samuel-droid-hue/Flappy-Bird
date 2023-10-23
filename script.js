const canvas = document.getElementById("animacion");
const ctx = canvas.getContext('2d');

const wings_down = new Image();
const wings_up = new Image();
wings_down.src =  "pngegg (3).png";
wings_up.src = "pngegg (4).png";

let flap = true; // Variable to alternate beetwen pictures

// Counter
// Remember when i++ bird go down
//               i-- bird go up
//var i = 0

let y = canvas.height/2-wings_down.height/2;
let gravity = 4;
let isKeyPressed = false;

document.addEventListener("keydown", (e) => {
    if(e.key == "ArrowUp") {
        y -= 20;
        isKeyPressed = true;
    } else if (e.key == "ArrowDown") {
        y += 20;
        isKeyPressed = true;
    }
});

document.addEventListener("keyup", (e) => {
    isKeyPressed = false; 
});


wings_down.onload = function() {
    startGame();
}

function startGame() {
    // y : coordinate y bird
    var intervalID = setInterval(function() {
        // Gravity is actived when !isKeyPressed
        if (!isKeyPressed) {
            y += gravity;
        }
        // Indicates if there is a collision
        if (y + wings_up.height >= canvas.height + 5) {
            clearInterval(intervalID);
            console.log("Game Over!");
        } else if (y + wings_up.height < 0 || y + wings_down.height < 0) {
            
        }
        draw(y);
    }, 100);
}

// Changes in orden to y
function draw(y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (flap) {
        ctx.drawImage(wings_down, canvas.width/2-wings_down.width/2, y);
    } else {
        ctx.drawImage(wings_up, canvas.width/2-wings_up.width/2, y);
    }
    flap = !flap; // Alternate beetwen the state var
}


/*
function draw_text(text) {
    ctx.font = "32px Arial";
    ctx.fillStyle = "black";
    // Parameters text position: x y
    ctx.fillText(text, 370, 60);
    console.log("Writing...");
}
*/