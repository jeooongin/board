import { Button, Col, Layout, Menu, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import SiderLayout from "./SiderLayout";

import UserCard from "./UserDropDown";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const AppLayout = ({ children }) => {
  const { logInDone } = useSelector((state) => state.user);

  return (
    <Layout
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <a>
            <Title level={2} style={{ paddingTop: "10px", color: "white" }}>
              Board
            </Title>
          </a>
        </Link>
        <div>
          {logInDone ? (
            <UserCard />
          ) : (
            <>
              <Link href="/login">
                <a>
                  <Button type="primary" style={{ marginRight: "10px" }}>
                    로그인
                  </Button>
                </a>
              </Link>
              <Link href="/signup">
                <a>
                  <Button>회원가입</Button>
                </a>
              </Link>
            </>
          )}
        </div>
      </Header>
      <Layout>
        <SiderLayout />
        <Content>
          <Row>
            <Col xs={24} md={6}></Col>
            <Col xs={24} md={12}>
              {children}
            </Col>
            <Col xs={24} md={6}></Col>
          </Row>
        </Content>
      </Layout>
      <Footer
        style={{
          display: "flex",
          justifyContent: "center",
          background: "white",
        }}
      >
        Copyright 2022. JeongIn All rights reserved.
      </Footer>
    </Layout>
  );
};

export default AppLayout;
