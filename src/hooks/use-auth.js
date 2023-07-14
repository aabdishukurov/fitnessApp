import { useSelector } from "react-redux";

export function useAuth() {
  const { email, isLoading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );

  return {
    isAuth: email,
    isAuthenticated,
    isLoading,
    email,
    error,
  };
}
