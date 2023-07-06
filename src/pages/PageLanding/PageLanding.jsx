import { useSelector } from "react-redux";
import { ProSection } from "../../components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PageLanding = () => {
  const { proStatus } = useSelector((state) => state.ProReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (proStatus) {
      navigate("/pro");
    }
  }, [proStatus]);

  return (
    <main>
      <ProSection />
    </main>
  );
};
