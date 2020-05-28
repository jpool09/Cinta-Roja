//Parte 1
let myPenguin = {
  name: "The Prix Alfred",
  character: "Alfred",
  origin: "Zig et Puce",
  creator: "Alain Saint-Organ",
  note: "Named the Prix Alfred",
};

//Parte 2
console.log(`Hola, soy un pinguino y mi nombre es: ${myPenguin.name}`);

//Parte 3
myPenguin.puedeVolar = false;

//Parte 4
myPenguin.graznar = function () {
  return alert("Kaww Kaww!");
};

//Parte 5
myPenguin.saludar = function () {
  return console.log(`Hola, soy un pinguino y mi nombre es: ${myPenguin.name}`);
};

//Parte 6
myPenguin.name = "Cambio de Nombre";

//Parte 7
myPenguin.volar = function () {
  if (myPenguin.puedeVolar) {
    return console.log("¡Puedo Volar!");
  } else {
    return console.log("No puedo volar! :(");
  }
};

//Parte 8
myPenguin.puedeVolar = true;

myPenguin.volar();

//Parte 9
let receta = {
  titulo: "Mole",
  porciones: 4,
  ingredientes: ["chocolate", "chile", "agua", "pollo", "canela"],
};

//Parte 10
// let libro = {
//     titulo: '',
//     autor: '',
//     estado: true
// };

// let libro1 = new libro();
// libro1.titulo="Harry Potter";
// libro1.autor="JK R.";
// libro1.estado=true;

class Libro {
  constructor(titulo, autor, estado) {
    this.autor = autor;
    this.titulo = titulo;
    this.estado = estado;
  }
  getTitulo() {
    return this.titulo;
  }
  getAutor() {
    return this.autor;
  }
  getEstado() {
    return this.estado;
  }
}

let libro1 = new Libro("Harry Potter", "KJ R.", true);
let libro2 = new Libro("El Alquimista", "Paulo Coelho", false);
let libro3 = new Libro("EL nombre del viento", "ni idea", true);

let array = [libro1, libro2, libro3];

console.log(array);
