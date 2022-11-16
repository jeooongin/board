import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import useInput from "../hooks/useInput";
import { signUp } from "../reducers/user";

const FormWrapper = styled(Form)`
  margin: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const Error = styled.div`
  color: red;
`;

const SignUpForm = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [name, onChangeName, setName] = useInput("");
  const [nickName, onChangeNickName, setNickName] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();
  const { signUpLoading, signUpDone } = useSelector((state) => state.user);

  // 회원가입 버튼 클릭 시 입력 값 초기화
  useEffect(() => {
    if (signUpDone) {
      setEmail("");
      setName("");
      setNickName("");
      setPassword("");
      setPasswordCheck("");
      setPasswordError(false);
    }
  }, [signUpDone]);

  // 비밀번호, 비밀번호 확인 값 비교 함수
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  // 회원가입 폼 submit 함수
  const onSubmitForm = useCallback(() => {
    dispatch(signUp(email, name, nickName, password));
  }, [password, passwordCheck]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
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
        <label htmlFor="user-name">이름</label>
        <br />
        <Input
          name="user-name"
          type="text"
          value={name}
          onChange={onChangeName}
          required
        />
      </div>
      <div>
        <label htmlFor="user-nickname">닉네임</label>
        <br />
        <Input
          name="user-nickname"
          type="text"
          value={nickName}
          onChange={onChangeNickName}
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
      <div>
        <label htmlFor="user-password-check">비밀번호 확인</label>
        <br />
        <Input
          name="user-password-check"
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          required
        />
        {passwordError && <Error>비밀번호가 일치하지 않습니다.</Error>}
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={signUpLoading}>
          회원가입
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default SignUpForm;
