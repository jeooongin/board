import { Button, Layout, Typography } from "antd";
import React from "react";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const AppLayout = ({ children }) => {
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Title level={2} style={{ padding: "10px", color: "white" }}>
            Board
          </Title>
          <div>
            <Button type="primary" style={{ marginRight: "10px" }}>
              로그인
            </Button>
            <Button>회원가입</Button>
          </div>
        </Header>
        <Layout>
          <Sider style={{ background: "white" }}>Sider</Sider>
          <Content>{children}</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default AppLayout;
