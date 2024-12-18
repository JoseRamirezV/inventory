import { verifyToken } from "@/services/users.service";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";

export default function Guard() {
  const { login, logout, isLogged } = useContext(AuthContext);
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      if (!token) {
        // Si no hay token, se asegura de cerrar sesión y redirigir
        if (isLogged) logout();
        navigate("auth/");
        return;
      }
      try {
        const res = await verifyToken();
        if (!res) throw new Error("Hubo una falla de conexión con el servidor");
        const { error, user } = res;
        if (error) throw new Error(error);
        login({ ...user, isLogged: true });
      } catch (error) {
        logout();
        navigate("auth", {
          state: {
            error: (error as Error).message,
          },
        });
        return;
      }
    })();
  }, [token, isLogged, logout, login, navigate]);

  if (!token) return <Navigate to={"auth"} />;

  return <Outlet />;
}
