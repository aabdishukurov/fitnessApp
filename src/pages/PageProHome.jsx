import { useSelector } from "react-redux";
import { Nutritios } from "../components/";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PageProHome = () => {
  const { proStatus } = useSelector((state) => state.ProReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!proStatus) {
      navigate("/");
    }
  }, [proStatus]);

  return (
    <main>
      {/* Ваша цель */}
      {/* Калькулятор воды */}
      <Nutritios />
    </main>
  );
};
