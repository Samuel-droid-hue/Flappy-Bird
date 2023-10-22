var canvas = document.getElementById("animacion");
var ctx = canvas.getContext('2d');

var wings_down = new Image();
var wings_up = new Image();
wings_down.src =  "pngegg (3).png";
wings_up.src = "pngegg (4).png";

var flap = true; // Variable to alternate beetwen pictures

// Counter
// Remember when i++ bird go down
//               i-- bird go up
//var i = 0

y = canvas.height/2-wings_down.height/2;

document.addEventListener("keydown", (e) => {
    if(e.key == "ArrowUp") {
        y -= 20;
    } else if (e.key == "ArrowDown") {
        y += 20;
    }
});

wings_down.onload = function() {
    // y : coordinate y bird
    var intervalID = setInterval(function() {
        // Indicates if there is a collision
        if (y + wings_up.height >= canvas.height + 5) {
            clearInterval(intervalID);
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