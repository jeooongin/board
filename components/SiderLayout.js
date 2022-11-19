import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

// sidebar 아이템 제작 함수
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// sidebar 아이템 구조
const items = [
  getItem("웹 개발 게시판", "/web"),
  getItem("앱 개발 게시판", "/app"),
  getItem("인공지능 게시판", "/ai"),
];

const SiderLayout = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Sider theme="light">
      <Menu onClick={onClick} items={items} theme="light" />
    </Sider>
  );
};

export default SiderLayout;
