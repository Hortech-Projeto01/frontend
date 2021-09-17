import React from "react";
import { Formik } from "formik";
import { SubmitButton, ResetButton, Form } from "formik-antd";
import PropTypes from "prop-types";
import { message } from "antd";
import { useHistory } from "react-router";

import "./styles.scss";
import UrlRouter from "core/constants/UrlRouter";

//TODO: Fazer com que, ao submeter o form e o mesmo não esteja válido, todos os campos com erro sejam "touched"
function GenericForm({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  ...props
}) {
  const history = useHistory();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values)
          .then(() => {
            message.success("Salvo com sucesso!");
            actions.resetForm();
            history.push(UrlRouter.plantas.index);
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
      <>
        <Form layout="vertical">
          {children}
          <div className="form-buttons-container">
            <ResetButton className="form-buttons">Limpar Campos</ResetButton>
            <SubmitButton className="form-buttons">Salvar</SubmitButton>
          </div>
        </Form>
      </>
    </Formik>
  );
}

GenericForm.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.any,
  onSubmit: PropTypes.func,
  children: PropTypes.element,
};

export default GenericForm;
