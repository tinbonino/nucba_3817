import { Router } from "express";
import { check } from "express-validator";
import { existeEmail } from "../helpers/validacionesDB";

import { register } from "../controllers/auth";
import { recolectarErrores } from "../middlewares/recolectarErrores";
import { login } from "../controllers/auth";
import { verifyUser } from "../controllers/auth";
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

router.post(
	"/login",
	[
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password debe ser de 6 caracteres").isLength({
			min: 6,
		}),
		recolectarErrores,
	],
	login
);

router.patch(
	"/verify",
	[
		check("email", "El email es requerido").not().isEmpty(),
		check("code", "El código de verificación es requerido").not().isEmpty()
	],
	verifyUser
)

export default router;