interface Comida {
    readonly nombre: string;
    readonly origen: string;
    readonly ingredientes: string[];
}

const comida: Comida = {
    nombre: 'Pizza',
    origen: 'Italia',
    ingredientes: ['Masa', 'Salsa de tomate', 'Queso', 'Pepperoni'],
};

comida.nombre="Empanada"; // No puedo reasignarla porque es readonly