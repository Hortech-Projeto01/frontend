import React from "react";
//import MainCard from "core/components/MainCard";
import { Layout,Card, Row, Col } from 'antd';

import "./style.scss"

export default function Home() {
  return (
    // <MainCard style={{ minHeight: '100vh' }} className="mainDashboard"> 
      <Layout style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}>
      <><h3>
                    Bem vindo usuário!
                  </h3>
        <Row gutter={[16, 16]}>
          <Col span={12} >
          <Card title="Avisos" className="innerCard" >Não há avisos.</Card>
      
    
          
          </Col>
          <Col span={12}><Card title="Recomendações" className="innerCard" >Não há lembretes.</Card></Col>
          </Row>
          <Row gutter={[16, 16]}>
          <Col span={12}>
          <h3>
                  </h3>
          </Col>
          <Col span={12}></Col>
          </Row>
        
      </>

    </Layout>
  );
}
