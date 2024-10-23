import "./index.css";
import { Outlet } from "@tanstack/react-router";
export default function App() {
  return (
    <div className="flex justify-center">
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
