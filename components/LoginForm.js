import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import useInput from "../hooks/useInput";
import { logIn } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);

  // 로그인 폼 submit 함수
  const onSubmitForm = useCallback(() => {
    dispatch(logIn(email, password));
  }, [email, password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input
          name="user-email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;
