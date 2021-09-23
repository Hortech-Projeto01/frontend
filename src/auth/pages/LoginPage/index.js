import React, {useEffect} from "react";
import LoginForm from 'auth/components/LoginForm'
import {Layout, Row, Col, Divider, Image } from "antd";
import  { } from 'react-router-dom'
import { useAuth } from "auth/components/ProvideAuth"
import { Redirect } from "react-router"

import "./style.scss"

const { Content} = Layout;



const LoginPage = () => {
    // const [error, setError] = useState();
  
    // const { setAdminData } = useContext(AdminContext);
    // const history = useHistory();
    // function handleChange(e) {
    //   const { name, value } = e.target;
    //   setInputs((inputs) => ({ ...inputs, [name]: value }));
    // }
    const auth = useAuth();
    useEffect(() => {
      console.log(auth.user);
      return <Redirect to="/" />;
    },[auth]);
    const onFinish = (values) => {
      auth.signin();
      console.log(values);
    };
    
    return (
      <>
        <Layout className="layout">
          <Row>
            <Col span={12} offset={6}>
              <Content
               style={{
                padding: "150px 0 180px",
                maxWidth: "360px",
                margin: "0 auto",
              }}
              > <div className="logoArea">
                <Image  src="assets/leaf.png" preview={false} />
                </div>
                {/* {error && (
                  <ErrorNotice
                    message={error}
                    clearError={() => setError(undefined)}
                  />
                )} */}
                <Divider />
                <h1>Login</h1>
                <div className="site-layout-content">
                  <LoginForm onFinish={onFinish} />
                </div>
              </Content>
            </Col>
          </Row>
        </Layout>
      </>
    );
  };
  
  export default LoginPage;