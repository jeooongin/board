import React from "react";
import { Col, Menu, Row } from "antd";
import Link from "next/link";

const items = [
  {
    label: (
      <Link href="/">
        <a>홈</a>
      </Link>
    ),
    key: "/",
  },
  {
    label: (
      <Link href="/free">
        <a>자유 게시판</a>
      </Link>
    ),
    key: "/free",
  },
  {
    label: (
      <Link href="/login">
        <a>로그인</a>
      </Link>
    ),
    key: "/login",
  },
  {
    label: (
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
    ),
    key: "/signup",
  },
];

const App = ({ children }) => {
  return (
    <>
      <Menu mode="horizontal" items={items} />
      <Row gutter={8}>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={18}>
          {children}
        </Col>
      </Row>
    </>
  );
};

export default App;
