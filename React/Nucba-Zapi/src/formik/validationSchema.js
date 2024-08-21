import * as Yup from "yup";

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required("El campo es obligatorio"),
    cellphone: Yup.string().required("El campo es obligatorio"),
    location: Yup.string().required("El campo es obligatorio"),
    address: Yup.string().required("El campo es obligatorio"),
});