import { createSlice } from "@reduxjs/toolkit";

import { products } from "../../data";
//Creación de un Array de Recomendaciones:
// El código comienza con la creación de un array llamado recommended.

// Se utiliza el método .fill(0) para inicializar el array con ceros. Esto crea un array de longitud 4, donde todos los elementos son 0.

// Reducción del Array:

// A continuación, se aplica el método .reduce() al array recommended.

// La función de reducción toma dos argumentos: acc (acumulador) y value (valor actual).
// En cada iteración, se crea un nuevo objeto newRecommended basado en un producto aleatorio seleccionado del array products.

// Se verifica si el ID del producto aleatorio ya está presente en el array acc. Si es así, se selecciona otro producto aleatorio hasta que se encuentre uno con un ID único.
// El producto único se agrega al acumulador acc.
const INITIAL_STATE = {
  recommended: Array(4)
    .fill(0)
    .reduce((acc) => {
      const IDs = acc.map((value) => value.id);
      let newRecommended;
      do {
        newRecommended = {
          ...products[Math.floor(Math.random() * products.length)],
        };
      } while (IDs.includes(newRecommended.id));

      return [...acc, newRecommended];
    }, []),
};

export const recommendedSlice = createSlice({
  name: "recommended",
  initialState: INITIAL_STATE,
  reducers: {
    randomRecommended: (state) => {
      return state;
    },
  },
});

export const { randomRecommended } = recommendedSlice.actions;

export default recommendedSlice.reducer;
