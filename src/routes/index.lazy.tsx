import { createLazyFileRoute } from "@tanstack/react-router";
import logo from "../assets/logo.svg";
import { Avatar } from "../components/Avatar/Avatar";
import { Button } from "../components/Button/Button";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <img className="mb-10" src={logo}></img>
      <div className=" flex flex-col gap-2 mb-2 items-center">
        <Avatar size="medium" />
        <span className="text-xs">huyencute</span>
      </div>
      <Button>Login</Button>
      <a href="#">Switch accounts</a>
    </div>
  );
}
