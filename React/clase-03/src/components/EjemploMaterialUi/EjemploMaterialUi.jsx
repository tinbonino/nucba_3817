import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function EjemploMaterialUi() {

    const comidas = [
        {
          titulo: "Empanadas",
          descripcion: "Masa rellena de carne, pollo, queso u otros ingredientes, cocida al horno o frita."
        },
        {
          titulo: "Tacos",
          descripcion: "Tortilla de maíz o trigo doblada o enrollada que contiene una variedad de ingredientes, como carne, frijoles, lechuga, y queso."
        },
        {
          titulo: "Sushi",
          descripcion: "Plato japonés que consiste en arroz avinagrado acompañado de pescados, mariscos o vegetales."
        }
      ];
      
     
      


  return (
    <div>
        {
            comidas.map((comida) => {
                return  <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography>{comida.titulo}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{comida.descripcion}</Typography>
                            </AccordionDetails>
                        </Accordion>
              
            })
        }

    </div>
  )
}

export default EjemploMaterialUi