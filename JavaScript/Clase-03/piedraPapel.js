// funcion que almacena el nombre

function nombreJugador(){
    let nombre=prompt("Ingrese su nombre");
    return nombre
}

//funcion que almacena la jugada
function jugada(nombre){
    
    let eleccion=prompt("Ingrese su jugada: 1-Piedra, 2-Papel, 3-Tijera");
    console.log("--------------------------------------------");
    console.log(nombre+": "+eleccion);
    console.log("--------------------------------------------");
    
    return eleccion
}
//funcion que define al ganador
function ganador(jugador1,jugador2,jugada1,jugada2){
    
    if((jugada1==1&&jugada2==3)||(jugada1==2&&jugada2==1)||(jugada1==3&&jugada2==2)){
        //     true         true            false       false            false    true
        //           true                         false                        false
        
        console.log(jugador1+" ha ganado la partida!");
        
    } else if(jugada1==jugada2){
        console.log("El resultado ha sido empate");
    } else {
        console.log(jugador2+" ha ganado la partida!")
    }
}


let jugador1=nombreJugador();
let jugador2=nombreJugador();

let jugada1=jugada(jugador1);
let jugada2=jugada(jugador2);

ganador(jugador1,jugador2,jugada1,jugada2);