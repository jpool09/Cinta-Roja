const request = require("request"); //Se refiere a una libreria que esta en package.json

function recibirData(error, response, body) {
  console.log(error);
  console.log(response);
  console.log(body);
}

request("https://pokeapi.co/api/v2/pokemon/ditto/", recibirData);
