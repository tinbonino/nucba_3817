import { Router } from "express";
import { check } from "express-validator";
import { existeEmail } from "../helpers/validacionesDB";

import { register } from "../controllers/auth";
import { recolectarErrores } from "../middlewares/recolectarErrores";

const router = Router();

router.post("/register",[
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("email","El email no tiene el formato esperado").isEmail(),
    check("password","El password debe ser de al menos 6 caracteres").isLength({
        min:6
    }),
    check("email").custom(existeEmail),
    recolectarErrores
],
register
);

export default router;