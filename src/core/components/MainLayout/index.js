import React, { useState } from "react";
import MainHeader from "core/components/MainHeader";
import { Layout } from "antd";
import MainSidebar from "../MainSidebar";
import PropTypes from "prop-types";

/* 
TODO: Layout principal da aplicação. Deverá conter

*/
function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout>
        <MainSidebar
          trigger={null}
          breakpoint="md"
          collapsedWidth="0"
          collapsible
          collapsed={collapsed}
          onCollapse={toggle}
        />
        <Layout>
          <MainHeader collapsed={collapsed} toggleFn={() => toggle()} />
          {children}
        </Layout>
      </Layout>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
