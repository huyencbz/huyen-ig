import { useAuth } from "../context/AuthContext";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, ComponentType } from "react";

export const withAuth = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = (props: P) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuthenticated) {
        navigate({ to: "/login" });
      }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <Component {...props} /> : null;
  };

  WrappedComponent.displayName = `withAuth(${Component.displayName || Component.name || "Component"})`;
  return WrappedComponent;
};
