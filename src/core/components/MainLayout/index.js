import React, { useState } from "react";
import MainHeader from "core/components/MainHeader";
import { Layout } from "antd";
import MainSidebar from "../MainSidebar";
import PropTypes from "prop-types";

/* 
TODO: Layout principal da aplicação. Deverá conter

*/
function MainLayout({ children }) {
  const [responsive, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!responsive);
  };
  return (
    <>
      <Layout>
        <MainSidebar
          trigger={null}
          breakpoint="lg"
          collapsedWidth="0"
          collapsible
          collapsed={responsive}
          onCollapse={toggle}
        />
        <Layout>
          <MainHeader collapsed={responsive} toggleFn={() => toggle()} />
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
