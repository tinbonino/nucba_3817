import "./assets/styles/styles.css"
import "./assets/styles/mediaqueries.css"
import "./assets/styles/animaciones.css"

import { productsSectionInit } from "./assets/products-section/products-section.js"
import { menuInterfaceInit } from "./assets/menu-interface/menu-interface.js"
import { cartActionsInit } from "./assets/cart/cart.js"
import { scrollEffectsInit } from "./assets/scroll-effects/scroll.js"
import { typewriterInit } from "./assets/typewriter/typewriter.js"


//Función inicializadora
const init = () => {
  productsSectionInit();
  cartActionsInit();
  menuInterfaceInit();
  scrollEffectsInit();
  typewriterInit();
}
init();
