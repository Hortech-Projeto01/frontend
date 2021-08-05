import React from "react";
import MainHeader from "core/components/MainHeader";
import { Layout } from "antd";
import MainSidebar from "../MainSidebar";
import PropTypes from "prop-types";

/* 
TODO: Layout principal da aplicação. Deverá conter

*/
function MainLayout({ children }) {
  return (
    <>
      <Layout>
        <MainSidebar />
        <Layout>
          <MainHeader />
          {children}
        </Layout>
      </Layout>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element,
};
MainLayout.state = {
  collapsed : false,
}
MainLayout.responsive = (newCollapsed) => {
  this.setState({collapsed: newCollapsed})
}

export default MainLayout;
