import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/Firebase";
import LoadingScreen from "./LoadingScreen";

const HasLogin = ({ children }) => {
  const nav = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      nav("/login");
      return;
    }
  }, [user, nav]);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return children;
  }
};

export default HasLogin;
