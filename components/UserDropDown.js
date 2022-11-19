import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import Link from "next/link";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { logOut } from "../reducers/user";

const UserProfileDropDown = () => {
  const dispatch = useDispatch();

  const onSubmitLogOut = useCallback(() => {
    dispatch(logOut());
  });

  const items = [
    {
      label: (
        <Link href="/profile">
          <a>내 정보</a>
        </Link>
      ),
      key: "/profile",
    },
    {
      label: (
        <Link href="/">
          <a onClick={onSubmitLogOut}>로그아웃</a>
        </Link>
      ),
      key: "/logout",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Space style={{ cursor: "pointer" }}>
        <Avatar icon={<UserOutlined />} />
        <CaretDownOutlined style={{ color: "white" }} />
      </Space>
    </Dropdown>
  );
};

export default UserProfileDropDown;
