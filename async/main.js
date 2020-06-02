function getUsuarios(callBack){
    const datos = [
        {nombre: 'Pool', edad: '22'},
        {nombre: 'Mathi', edad: '12'},
        {nombre: 'Vale', edad: '21'}
    ];
    setTimeout(function(){
        callBack(datos, 'Todo bien');
        console.log("Ya paso el callback");
    },3000);
}

console.log("Inicio del programa");

getUsuarios(function (data, texto){ //El callback es la funcion anonima
    console.log('Dentro del callback');
    console.log(data);
    console.log(texto);
});