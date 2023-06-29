import { useSelector } from "react-redux";
import { Pro } from "../components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PageHome = () => {
  const { proStatus } = useSelector((state) => state.ProReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (proStatus) {
      navigate("/pro");
    }
  }, [proStatus]);

  return (
    <main>
      <Pro />
    </main>
  );
};
