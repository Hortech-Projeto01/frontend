import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

import "./style.scss";
/* 
TODO: Layout de login, nao contem sidebar

*/
function LoginLayout({ children }) {
  return (
      <Layout className="loginLayout">
          {children}
      </Layout>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.element,
};

export default LoginLayout;
