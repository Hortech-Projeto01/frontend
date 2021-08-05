import React from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import "./style.scss";

export default function MainHeader() {

  const collapsed =false;

  /*   state = { collapsed: false };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }; */


  return (
    <div className="main-header">
        { (!collapsed) &&<MenuUnfoldOutlined style={{ color: "#fff", fontSize: 24 }} />}
    </div>
  );
}
