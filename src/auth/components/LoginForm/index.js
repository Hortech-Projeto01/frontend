import React from "react";
import PropTypes from "prop-types";
import UrlRouter from "core/constants/UrlRouter";
import { Formik } from "formik";
import { message } from "antd";
import { Form, FormItem, Input } from "formik-antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import GenericButton from "core/generics/GenericButton";
import { useAuth } from "auth/context";
import { useHistory } from "react-router";
import AuthService from "auth/services/AuthService";
import * as yup from "yup";

import "./style.scss";

const LoginForm = (props) => {
  const history = useHistory();
  const auth = useAuth();
  const authService = new AuthService();

  const initialValues = {
    email: "",
    senha: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Deve ser um email válido.")
      .required("Por favor, insira seu email!"),
    senha: yup.string().required("Por favor, insira sua senha!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        authService
          .login(values)
          .then(({ data }) => {
            const { token } = data;
            auth.login(token);
            history.push(UrlRouter.home);
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
      <Form>
        <FormItem name="email">
          <Input
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            autoComplete="off"
          />
        </FormItem>
        <FormItem name="senha">
          <Input
            name="senha"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
            autoComplete="off"
          />
        </FormItem>
        <GenericButton
          type="primary"
          className="login-form-button"
          htmlType="submit"
        >
          Entrar
        </GenericButton>
        Ou <a href="">Cadastre-se!</a>
      </Form>
    </Formik>
  );
};

LoginForm.propTypes = {
  onFinish: PropTypes.func,
};

export default LoginForm;
