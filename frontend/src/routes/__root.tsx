import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import { AuthProvider } from "../context/AuthContext";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      <App />
      <TanStackRouterDevtools />
    </AuthProvider>
  ),
});
