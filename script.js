var canvas = document.getElementById("animacion");
var ctx = canvas.getContext('2d');

var img_ = new Image();
var img__ = new Image();
img_.src =  "pngegg (3).png";
img__.src = "pngegg (4).png";

var mostrarPrimeraImagen = true; // Variable de estado para alternar entre imágenes

// Posicion en el eje x
var pos_x = 0;
// Velocidad
var vel = 5;

img_.onload = function() {
    setInterval(draw, 100); 
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pos_x += vel;

    if (pos_x > canvas.width)
        pos_x = -img_.width

    if (mostrarPrimeraImagen) {
        ctx.drawImage(img_, pos_x, 200);
    } else {
        ctx.drawImage(img__, pos_x, 200);
    }

    mostrarPrimeraImagen = !mostrarPrimeraImagen; // Alternar la variable de estado
}
