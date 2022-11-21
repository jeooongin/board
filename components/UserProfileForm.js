import { Button, Form, Input } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <Form>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input name="user-email" type="email" value={me.email} required />
      </div>
      <div>
        <label htmlFor="user-name">이름</label>
        <br />
        <Input name="user-name" type="text" value={me.name} required />
      </div>
      <div>
        <label htmlFor="user-nickname">닉네임</label>
        <br />
        <Input name="user-nickname" type="text" value={me.nickName} required />
      </div>
      <Button type="primary" htmlType="submit">
        수정
      </Button>
    </Form>
  );
};

export default UserProfile;
