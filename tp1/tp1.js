//leandrovazquez 
//numero de lejago :92834/3 
//https://youtu.be/GxA57xAGqE4
let cant = 10;
let tam;
let grosor = 20;
let tono;
let imagen1;

function preload() {
  imagen1 = loadImage('data/imagen1.jpeg'); // Cargar la imagen antes de que el programa comience
}

function setup() {
  createCanvas(800, 400); // Crear el lienzo de 800x400
}

function draw() {
  background(255); // Fondo blanco
  
  image(imagen1, 0, 0, width / 2, height);

 
  tam = calcularTamanoCelda(width / 2, cant);
  
  console.log("Tamaño de cada celda: " + tam);

  
  for (let a = 0; a < cant; a++) {
    for (let b = 0; b < cant; b++) {
      tono = map(mouseY, 0, 200, 0, 50); 
      fill(0);
      stroke(tono);
      strokeWeight(grosor);
      rect((a * tam) + width / 2, b * tam, tam, tam);
    }
  }


  for (let c = 0; c < cant; c++) {
    for (let d = 0; d < cant; d++) {
      fill(255, 255);
      noStroke();
      rect((d * tam) + width / 2 + tam / 2, c * tam + tam / 2, 12, 12);
    }
  }
}

function mousePressed() {
  grosor = 20; 
}

function keyPressed() {
  if (key === 'r') {
    grosor = 8; 
    mouseY = 0;
  }
}


function calcularTamanoCelda(anchoDisponible, cantidadCeldas) {
  console.log("Ancho disponible: " + anchoDisponible);
  console.log("Cantidad de celdas: " + cantidadCeldas);
  
  let tamanoCelda = Math.floor(anchoDisponible / cantidadCeldas);
  
  console.log("Tamaño calculado de la celda: " + tamanoCelda);
  
  return tamanoCelda;
}
