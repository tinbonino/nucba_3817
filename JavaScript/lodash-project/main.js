import _ from "lodash";

// divid un array en segmentos

const arraySegmentado = _.chunk(["a","b","c","d","e","f"], 2);
console.log("Segmentado en array de 2: ",arraySegmentado);


const aleatorio= _.sample([1,2,3,4,5]);
console.log("Numero aleatorio:",aleatorio);

const shuffle= _.shuffle([1,2,3,4,5]);
console.log("Array con orden aleatorio:",shuffle)

const duplicados = _.map([1, 2, 3, 4, 5], (n) => n * 2);
console.log("Duplicados: ", duplicados);