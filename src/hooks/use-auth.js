import { useSelector } from "react-redux";

export function useAuth() {
  const {
    email,
    token,
    isAuthenticated,
    user,
    id,
    name,
    isLoading,
    secondName,
    error,
  } = useSelector((state) => state.auth);

  return {
    isAuthenticated,
    isAuth: email,
    email,
    isLoading,
    name,
    secondName,
    error,
    token,
    id,
    user,
  };
}
