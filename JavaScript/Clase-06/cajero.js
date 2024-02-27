let cliente1 = {
    nombre:"Jorgelina Lalala",
    saldo:0,
    cuentaCorriente:false,
    depositar: function(monto){
        this.saldo+=monto;
        console.log("Acaba de depositar: $"+monto);
        console.log("---------------------------------");
        console.log("Su nuevo saldo es de: $"+this.saldo)
        console.log("---------------------------------");
    },
    extraer: function(monto){
        this.saldo-=monto;
        console.log("Acaba de extraer: $"+monto);
        console.log("---------------------------------");
        console.log("Su nuevo saldo es de: $"+this.saldo)
        console.log("---------------------------------");
        
    },
    consultar: function(){
        console.log("Su saldo es de: $"+this.saldo);
    }
}

// cliente1.consultar();
// cliente1.depositar(5000);
// cliente1.consultar();
// cliente1.extraer(4000);

let opcion=prompt("Ingrese su opción\n 1-Consultar\n2-Depositar\n3-Extraer");

if (opcion==1){
    cliente1.consultar();
} else if (opcion==2){
    let monto=parseInt(prompt("Ingrese el monto a depositar"));
    cliente1.depositar(monto);
} else if(opcion==3){
    let monto=parseInt(prompt("Ingrese el monto a extraer"));
    cliente1.extraer(monto);

} else {
    console.log("La opción ingresada no es correcta");
}