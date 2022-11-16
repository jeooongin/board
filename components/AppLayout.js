import { Button, Layout, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserProfileDropDown";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const AppLayout = ({ children }) => {
  const { logInDone } = useSelector((state) => state.user);

  return (
    <>
      <Layout>
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
        <Layout style={{ display: "flex" }}>
          <Sider style={{ background: "white" }}>Sider</Sider>
          <Content style={{ justifyContent: "center", alignItems: "center" }}>
            {children}
          </Content>
        </Layout>
        <Footer>Copyright 2022. JeongIn All rights reserved.</Footer>
      </Layout>
    </>
  );
};

export default AppLayout;
