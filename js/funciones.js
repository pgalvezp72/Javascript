function pintarTablero(numFilas, numColumnas){
    let tablero = document.querySelector("#tablero");

    document.querySelector("html").style.setProperty("--num-filas",numFilas);
    document.querySelector("html").style.setProperty("--num-columnas",numColumnas);

    for(let f=0; f<numFilas; f++){
        for(let c=0; c<numColumnas; c++){
            let newDiv = document.createElement("div");
            tablero.appendChild(newDiv);
        }
    }
}