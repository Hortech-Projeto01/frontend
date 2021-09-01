import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import "./style.scss";

export default function MainHeader(args) {
  const { collapsed, toggleFn } = args;
  return (
    <div className="main-header">
      {collapsed ? (
        <MenuUnfoldOutlined className="sidebar-icon" onClick={toggleFn} />
      ) : (
        <MenuFoldOutlined className="sidebar-icon" onClick={toggleFn} />
      )}
    </div>
  );
}
