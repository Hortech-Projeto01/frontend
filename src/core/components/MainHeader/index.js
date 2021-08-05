import React from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import "./style.scss";

export default function MainHeader() {
  return (
    <div className="main-header">
      <MenuUnfoldOutlined style={{ color: "#fff", fontSize: 24 }} />
    </div>
  );
}
