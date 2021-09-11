import React from "react";
import { Formik } from "formik";
import { ResetButton, SubmitButton, Form } from "formik-antd";
import PropTypes from "prop-types";
import { message } from "antd";
import { useHistory } from "react-router";

import "./styles.scss";
import UrlRouter from "core/constants/UrlRouter";

//TODO: Fazer com que, ao submeter o form e o mesmo não esteja válido, todos os campos com erro sejam "touched"

/**
 *
 * Componente base para ser usado nos forms, tanto de edição quanto de criação.
 *
 * @param {Object} props
 * @param {Object} props.initialValues Valores iniciais dos campos. PREENCHA-OS, mesmo que com string vazia.
 * @param {Object} props.validationSchema Objeto Yup utilizado para validação dos campos.
 * @param {func} props.onSubmit Função a ser chamada quando o form for 'submitted'.
 * @returns Componente Form com os campos inseridos.
 */
function GenericForm({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  ...props
}) {
  const history = useHistory();

  return (
    <>
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
              <SubmitButton
                disabled={false}
                type="primary"
                className="form-buttons"
              >
                Salvar
              </SubmitButton>
            </div>
          </Form>
        </>
      </Formik>
    </>
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
