import { useSelector } from "react-redux";

export function useAuth() {
  const { email } = useSelector((state) => state.auth);

  return {
    isAuth: email,
    email,
  };
}
