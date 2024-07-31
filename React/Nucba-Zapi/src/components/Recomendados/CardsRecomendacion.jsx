import CardRecomendacion from "./CardRecomendacion";
import { recommended } from "../../data/Recommended";
import { CardsContainer } from "./CardsRecomendacionStyled";

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
     {recommended.map(recomendados=>(
      <CardRecomendacion key={recomendados.id} {...recomendados}/>
     ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
