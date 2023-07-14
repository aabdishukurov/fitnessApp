import React, { useEffect, useState } from "react";
import Hero from "../components/Landing/Hero";
import Devider from "../components/Landing/Devider";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { ProSection } from "../components";
import Cookies from "js-cookie";

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  // =================================================================
  const { proStatus } = useSelector((state) => state.ProReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (proStatus) {
      navigate("/pro");
    }
  }, [proStatus]);
  //   =================================================================

  useEffect(() => {
    Cookies.get("userName") && Cookies.get("user_token") && setIsLogin(true);
  }, []);
  const isPremium = false;

  let content = isLogin ? (
    <>
      <Hero />
      <Devider />
    </>
  ) : isPremium ? (
    <div>Premium</div>
  ) : (
    <>
      <Hero />
      <Devider />
      {/* ========== */}
      <ProSection />
      {/* ========== */}
    </>
  );

  return content;
};

export default LandingPage;
