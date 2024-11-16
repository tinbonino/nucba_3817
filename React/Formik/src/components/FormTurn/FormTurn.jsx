import React from "react";
import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";

import { useFormik } from "formik";
import  * as Yup from "yup";

import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurnStyles";

const phoneRegex= /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Campo requerido"),
  surname: Yup.string().trim().required("Campo requerido"),
  date: Yup.date().required("Campo requerido"),
  age: Yup.number()
    .integer("Debe ser un entero")
    .moreThan(16,"Sos menor")
    .lessThan(95,"Descanse del trabajo")
    .required("Campo requerido"),
  email: Yup.string()
    .email("Correo electrónico incorrecto")
    .required("Campo requerido"),
  cellphone: Yup.string()
    .matches(phoneRegex,"Numero de celular inválido")
    .required("Campo requerido"),
  comments: Yup.string().max(255,"Máximo de 255 caracteres alcanzado").notRequired()
});

const FormTurn = () => {

  const {getFieldProps,handleSubmit,errors,touched} = useFormik({
    initialValues:{
      name:"",
      surname:"",
      date: "",
      age: "",
      email: "",
      cellphone: "",
      comments: ""

    },
    validationSchema,
    onSubmit: (values, {resetForm}) => {
      console.log({values});
      resetForm();
    }
  })

  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>
      <Form>
        <Input 
          label="Nombre"
          type="text"
          name="name"
          isError={touched.name && errors.name}
          {...getFieldProps("name")}
        />      
        <Input
          name="surname"
          label="Apellido"
          type="text"
          isError={touched.surname && errors.surname}
          {...getFieldProps("surname")}
        />
        <Input
          name="date"
          label="Fecha"
          type="date"
          isError={touched.date && errors.date}
          {...getFieldProps("date")}
        />
        <Input
          name="age"
          label="Edad"
          type="number"
          isError={touched.age && errors.age}
          {...getFieldProps("age")}
        />
        <Input
          name="email"
          label="Correo Electronico"
          type="email"
          isError={touched.email && errors.email}
          {...getFieldProps("email")}
        />
        <Input
          name="cellphone"
          label="Telefono"
          type="text"
          isError={touched.cellphone && errors.cellphone}
          {...getFieldProps("cellphone")}
        />
        <TextAreaInput
        name="comments"
        label="¿Cómo escuchaste de nosotros?" 
        isError={touched.comments && errors.comments}
        {...getFieldProps("comments")}
        />
        <Submit onSubmit={handleSubmit} />
      </Form>
    </FormBox>
  );
};

export default FormTurn;
