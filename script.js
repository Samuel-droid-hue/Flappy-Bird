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

wings_down.onload = function() {
    var y = canvas.height/2-wings_down.height/2;
    setInterval(function() {
        y += 10;
        if (y > canvas.height) {
            y = 10;
        } else if (y < 0) {
            y = canvas.height;
        }
        draw(y);
    }, 80);
    // Draw text on canvas
}

function draw(y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (flap) {
        ctx.drawImage(wings_down, canvas.width/2-wings_down.width/2, y);
    } else {
        ctx.drawImage(wings_up, canvas.width/2-wings_up.width/2, y);
    }
    //draw_text(i);
    flap = !flap; // Alternar la variable de estado
    console.log(y + "-" + canvas.height);
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