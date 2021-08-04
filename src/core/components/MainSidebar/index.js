import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  FunnelPlotOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

import "./style.scss";
import { Link } from "react-router-dom";
import UrlRouter from "core/constants/UrlRouter";

export default function MainSidebar() {
  return (
    <Sider className="sidebar">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to={UrlRouter.home}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FunnelPlotOutlined />}>
          <Link to={UrlRouter.planta.index}>Plantas</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Plantação
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
