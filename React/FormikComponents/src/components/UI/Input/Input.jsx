import React from "react";
import { ErrorMessage, Field } from "formik";

import {
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
  ErrorStyled,
} from "./InputStyles";

const Input = ({ name, label, type, isError }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field
        name={name}
        type={type}
        id={label}
        error={isError}
        as={InputStyled}
      />
      <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  );
};

export default Input;
