import "./index.css";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export default function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[500px] grow">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  );
}
