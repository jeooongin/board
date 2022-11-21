import React from "react";
import { useSelector } from "react-redux";

import UserProfileForm from "../components/UserProfileForm";
import LogInForm from "../components/LogInForm";
import AppLayout from "../components/AppLayout";

const profile = () => {
  const { logInDone } = useSelector((state) => state.user);
  return (
    <AppLayout>{logInDone ? <UserProfileForm /> : <LogInForm />}</AppLayout>
  );
};

export default profile;
