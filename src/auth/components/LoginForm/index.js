import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { Form, Input, Button} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.scss";

const LoginForm = ({onFinish}) => {
    return (
        <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: "Por favor insira seu email!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Email"
                      autoComplete="off"
                    />
                  </Form.Item>
                  <Form.Item
                    name="senha"
                    rules={[
                      {
                        required: true,
                        type: "string",
                        whitespace: false,
                        message: "Por favor insira sua senha!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Senha"
                      autoComplete="off"
                    />
                  </Form.Item>
                  {/*Opcoes adicionais                  

                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Lembrar-me!</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                      Esqueci a senha!
                    </a>
                  </Form.Item>
                  */}

                  <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                    Ou <a href="">Cadastre-se!</a>
                  </Form.Item>
                </Form>
    );
  };

LoginForm.propTypes = {
onFinish: PropTypes.func,
};
  

export default LoginForm;