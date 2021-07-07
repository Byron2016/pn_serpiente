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
let ax = 17, ay = 17; // posición (x,y) actual del cuadrado rojo

let gusano = []; // array que almacena las coordenadas (x,y) que forman el cuerpo del gusano
let tam = 7; // tamaño del gusano, en número de cuadrados. Tamaño inicial es 7

function tecla(event){
  xv = 0;
  yv = 0;
  console.log(event.keyCode);
  switch(event.keyCode){
    case 37: // se pulsa flecha a la iz.
      xv = -1;
      break;
    case 38: // se pulsa flecha arriba
      yv = -1;
      break;
    case 39: // se pulsa fleca a derecha
      xv = 1;
      break;
    case 40: // se pulsa fleca abajo
      yv = 1;
      break;
  }
}

function inicio() {
  canvas = document.getElementById('lienzo');
  context = canvas.getContext("2d");

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
  if(px > nc - 1){
    px = 0;
  }
  if(py < 0){
    py = nc - 1;
  }
  if(py > nc - 1){
    py = 0;
  }
  
  // pintando el lienzo color azul
  context.fillStyle = "blue";
  context.fillRect(0,0, canvas.width, canvas.height);

  // pintando el gusano color amarillo
  context.fillStyle = "yellow";
  let i, n = gusano.length;

  for(i = 0; i < n; i++){
    context.fillRect(gusano[i].x * grosor, gusano[i].y * grosor, grosor - 1, grosor - 1);
    if(gusano[i].x === px && gusano[i].y === py){
      tam = 7;
    }
  }
  gusano.push({
    x: px, 
    y: py
  })
  while(gusano.length > tam){
    gusano.shift();
  }

  // Si el gusano come un cuarado rojo:
  if(ax === px && ay === py){
    tam = tam + 1; // el gusano crece una unidad

    // se asigna una nueva posición aleatoria al cuadrado rojo
    ax = aleatorio();
    ay = aleatorio();

    // se muestra el puntaje del jugador
    puntos = puntos + 1;
    document.getElementById("score").innerHTML = "Puntuación: " + puntos;

  }

  // se pinta el cuadrado rojo
  context.fillStyle = "red";
  context.fillRect(ax * grosor, ay * grosor, grosor, grosor);

}

  // Devuelve un número entero aleatorio entre 0 y el valor de nc
  function aleatorio() {
    return Math.floor(Math.random()*nc);
  }