import React from "react";
import MainCard from "core/components/MainCard";
import { Card, Row, Col } from 'antd';

import "./style.scss"

export default function Home() {
  return (
    <MainCard className="mainDashboard"> 
      <>
        <Row gutter={[16, 16]}>
          <Col span={12}>
          
      
    
          <h3>
                    Bem vindo usuário!
                  </h3>
          </Col>
          <Col span={12}><Card title="Lembretes" className="innerCard" >Não há lembretes.</Card></Col>
          </Row>
          <Row gutter={[16, 16]}>
          <Col span={12}>
          <h3>
                  </h3>
          </Col>
          <Col span={12}></Col>
          </Row>
        
      </>
    </MainCard>
  );
}
