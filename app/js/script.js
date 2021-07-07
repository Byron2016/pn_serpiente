// console.log("hola mundo");

// Variables globales
let context;
let canvas; //lienzo donde se grafica el juego
let velocidad = 320; // velocidad del movimiento del gusano (en ms), 78 muy rápido y 500 muy lento
let puntos = 0; // número de cuadrados rojos comidos por el gusano
let grosor = 20; // grosor del gusano (en pixeles)
let nc = 24; // número de cuadrados que forman el ancho y el alto del lienzo

let xv = 0, yv = 0;
let px = 20, py = 20; // posición (x,y) actual de la cabeza del gusano
let ax = 20, ay = 20; // posición (x,y) actual del cuadrado rojo

let gusano = []; // array que almacena las coordenadas (x,y) que forman el cuerpo del gusano
let tam = 0; // tamaño del gusano, en número de cuadrados.


function inicio() {
  canvas-document.getElementById('lienzo');
  context-canvas.getContext("2d");

  // definimos un oyente para el evento 'tecla pulsada'
  document.addEventListener("keydown", tecla);

  // ejecutar la función juego cada cierto tiempo.
  setInterval(juego, velocidad);
}

function juego() {
  px = px + xv;
  py = py + yv;
  if(px < 0){
    px = nc - 1;
  }
  if(px < nc - 1){
    px = 0;
  }
  if(py < 0){
    py = nc - 1;
  }
  if(px > nc - 1){
    py = 0;
  }
}