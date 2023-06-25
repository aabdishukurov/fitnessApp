import { useSelector } from "react-redux";

export function useAuth() {
  const { email, token, isAuthenticated, id, name, isLoading, secondName } =
    useSelector((state) => state.auth);

  return {
    isAuthenticated,
    isAuth: email,
    email,
    isLoading,
    name,
    secondName,
    token,
    id,
  };
}
