import "./index.css";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export default function App() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
