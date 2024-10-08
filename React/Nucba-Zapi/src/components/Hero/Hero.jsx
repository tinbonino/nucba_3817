import { AiOutlineSearch } from "react-icons/ai";

import Button from "../UI/Button/Button";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";


import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from "./HeroStyles";

const Hero = ({doScroll}) => {

  const [value,setValue]=useState("");

  const listOfCategories = useSelector(
    (state) => state.categories.categories
  ).map(objCategoria=>objCategoria.category);

  const dispatch=useDispatch();

  const handlerSubmit = (e,value) => {
    e.preventDefault();

    const newCategory=value.trim().toLowerCase().split(" ").join("");

    const selectedCategory = listOfCategories.find(category=>category.toLowerCase()===newCategory);

    if (selectedCategory){
      dispatch(selectCategory(selectedCategory));
      console.log("Deberia scrollear")
      doScroll();
    } else {
      return alert("Señor o señora, coloque bien esas comas");
    }

    setValue("");
  }

  return (
    <HeroContainerStyled>
      <div>
        <h1 className="title">¿Qué categoría estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
            type="text"
            placeholder="Ej. Pizzas a la piedra"
            onChange={e=>setValue(e.target.value)}
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button
            onClick={(e) =>handlerSubmit(e,value) }
            radius="10"
            disabled={!value}
          >
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png"
          alt=""
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
