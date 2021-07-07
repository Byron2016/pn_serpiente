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


