import ScrollReveal from "scrollreveal";

const discoverSection = document.querySelector("#discover");
const infoSection = document.querySelector("#info");
const productsSection=document.querySelector("#products");
const heroSection=document.querySelector("#hero");


const revealSection = (section) => {
  ScrollReveal().reveal(section,
{
    delay:200,
    distance:"100px",
    duration:1000,
    origin:"bottom",
    reset: false
})
};

export const scrollEffectsInit=() => {
  revealSection(heroSection);
  revealSection(productsSection);
  revealSection(infoSection);
  revealSection(discoverSection);
}