let myPenguin = {
  name: "The Prix Alfred",
  character: "Alfred",
  origin: "Zig et Puce",
  creator: "Alain Saint-Organ",
  note: "Named the Prix Alfred",
};

console.log(`Hola, soy un pinguino y mi nombre es: ${myPenguin.name}`);

Object.defineProperty(myPenguin, "canFly", {
  value: false,
});

myPenguin.graznar = function () {
  console.log("Kaww! Kaww!");
  return false;
};
