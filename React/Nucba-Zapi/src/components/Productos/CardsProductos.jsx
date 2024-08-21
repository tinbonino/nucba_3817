// import { Products } from "../../data";
import Button from "../UI/Button/Button";
import CardProducto from "./CardProducto";

import { useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { INITIAL_LIMIT } from "../../utils";
import { ButtonContainerStyled } from "../../pages/Home/HomeStyles";
import { ProductosContainer } from "./CardsProductosStyles";

const CardsProductos = () => {

  //Cantidad de productos x vista
  const [limit,setLimit] = useState(INITIAL_LIMIT);
  //Productos
  let products = useSelector((state) => state.products.products);
  //Categoria Seleccionada
  const {selectedCategory} = useSelector(state=>state.categories);
  //Total de productos
  const totalProducts = useSelector(state=>state.products.totalProducts);

  if (selectedCategory){
    products= {[selectedCategory]:products[selectedCategory]};
  }

  
  useEffect(()=>setLimit(INITIAL_LIMIT),[selectedCategory])
  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([, foods]) =>
          foods.map((food) => {if (limit>=food.id || selectedCategory) {
            return <CardProducto key={food.id} {...food} />;
          } 
          return null;
        })
      )}
        
      </ProductosContainer>

      { !selectedCategory && (   
        // si hay categoria seleccionada al negarlo pasa a false entonces el segundo tramo no se analiza.
        //si NO hay categoria seleccionada al negarlo pasa a true. entonces renderiza el segundo tramo.
      <ButtonContainerStyled>
        <Button
          onClick={() => setLimit(prevLimit=>prevLimit-INITIAL_LIMIT)}
          secondary="true"
          disabled={INITIAL_LIMIT===limit}
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={() => setLimit(prevLimit=>prevLimit+INITIAL_LIMIT) } disabled={totalProducts<=limit}>
          Ver más
        </Button>
      </ButtonContainerStyled>
      )}
    </>
  );
};

export default CardsProductos;
