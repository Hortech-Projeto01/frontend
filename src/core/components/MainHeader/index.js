import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import "./style.scss";

export default function MainHeader(args) {
  const { collapsed, toggleFn } = args;
  return (
    <div className="main-header">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        style: { color: "#fff", fontSize: 24 },
        onClick: toggleFn,
      })}
    </div>
  );
}
