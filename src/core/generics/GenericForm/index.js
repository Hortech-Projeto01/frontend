import React from "react";
import { Formik } from "formik";
import { SubmitButton, ResetButton, Form } from "formik-antd";
import PropTypes from "prop-types";
import { message } from "antd";

import "./styles.scss";

//TODO: Fazer com que, ao submeter o form e o mesmo não esteja válido, todos os campos com erro sejam "touched"
function GenericForm({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  ...props
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values)
          .then(() => {
            message.success("Salvo com sucesso!");
            actions.resetForm();
          })
          .catch((error) =>
            message.error(`Aconteceu um erro. 
        ${error?.message || ""}`)
          )
          .finally(() => {
            actions.setSubmitting(false);
          });
      }}
      {...props}
    >
      <Form layout="vertical">
        {children}
        <div className="form-buttons-container">
          <ResetButton className="form-buttons">Limpar Campos</ResetButton>
          <SubmitButton className="form-buttons">Salvar</SubmitButton>
        </div>
      </Form>
    </Formik>
  );
}

GenericForm.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.any,
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GenericForm;
