import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";

import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurnStyles";

/*El número de celular debe contener mínimo 10 números */

const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Campo Requerido"),
  surname: Yup.string().trim().required("Campo Requerido"),
  date: Yup.date().required("Campo Requerido"),
  age: Yup.number()
    .integer("Debe ser un entero")
    .moreThan(16, "Sos menor")
    .lessThan(95, "Descansá del trabajo")
    .required("Campo Requerido"),
  email: Yup.string()
    .email("Correo electrónico inváilido")
    .required("Campo Requerido"),
  cellphone: Yup.string()
    .matches(phoneRegex, "Número de celular inválido")
    .required("Campo Requerido"),
  comments: Yup.string().max(255, "Máximo de 255 caracteres").notRequired(),
});

const FormTurn = () => {
  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          date: "",
          age: "",
          email: "",
          cellphone: "",
          comments: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log({ values });
          resetForm();
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <Input
              name="name"
              label="Nombre"
              type="text"
              isError={touched.name && errors.name}
            />
            <Input
              name="surname"
              label="Apellido"
              type="text"
              isError={touched.surname && errors.surname}
            />
            <Input
              name="date"
              label="Fecha"
              type="date"
              isError={touched.date && errors.date}
            />
            <Input
              name="age"
              label="Edad"
              type="number"
              isError={touched.age && errors.age}
            />
            <Input
              name="email"
              label="Correo Electronico"
              type="email"
              isError={touched.email && errors.email}
            />
            <Input
              name="cellphone"
              label="Telefono"
              type="text"
              isError={touched.cellphone && errors.cellphone}
            />
            <TextAreaInput
              name="comments"
              label="¿Cómo escuchaste de nosotros? (opcional)"
              isError={touched.comments && errors.comments}
            />
            <Submit />
          </Form>
        )}
      </Formik>
    </FormBox>
  );
};

export default FormTurn;
