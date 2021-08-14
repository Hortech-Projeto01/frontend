import React from "react";
import { useLocation } from 'react-router-dom'
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

//TODO: Fazer o menu selecionado depender da rota.
export default function MainSidebar(props) {
  const location = useLocation();
  //gambiarra pra depender da rota
  const defaultKey = "/"+location.pathname.split("/")[1];
  return (
    <Sider className="sidebar" {...props}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultKey]}>
        <Menu.Item key={UrlRouter.home} icon={<HomeOutlined />}>
          <Link to={UrlRouter.home}>Home</Link>
        </Menu.Item>
        <Menu.Item key={UrlRouter.plantas.index} icon={<FunnelPlotOutlined />}>
          <Link to={UrlRouter.plantas.index}>Plantas</Link>
        </Menu.Item>
        <Menu.Item key={UrlRouter.plantacoes.index} icon={<UploadOutlined />}>
          <Link to={UrlRouter.plantacoes.index}>Plantação</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
