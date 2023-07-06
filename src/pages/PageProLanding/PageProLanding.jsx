import { useSelector } from "react-redux";
import { NutritiosSection } from "../../components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PageProLanding = () => {
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
      <NutritiosSection />
    </main>
  );
};
