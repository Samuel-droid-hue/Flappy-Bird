var canvas = document.getElementById("animacion");
var ctx = canvas.getContext('2d');

var wings_down = new Image();
var wings_up = new Image();
wings_down.src =  "pngegg (3).png";
wings_up.src = "pngegg (4).png";

var flap = true; // Variable to alternate beetwen pictures

// Counter
//var i = 0

wings_down.onload = function() {
    setInterval(draw, 90);
    // Draw text on canvas
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (flap) {
        ctx.drawImage(wings_down, canvas.width/2-wings_down.width/2, canvas.height/2-wings_down.height/2);
    } else {
        ctx.drawImage(wings_up, canvas.width/2-wings_up.width/2, canvas.height/2-wings_down.height/2);
    }
    //draw_text(i);
    flap = !flap; // Alternar la variable de estado
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