import { createLazyFileRoute } from "@tanstack/react-router";
import logo from "../assets/logo.svg";
import { Avatar } from "../components/Avatar/Avatar";
import { Button } from "../components/Button/Button";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="flex flex-col items-center justify-center w-2/3">
        <img className="mb-10" src={logo}></img>
        <div className=" flex flex-col gap-2 mb-2 items-center">
          <Avatar size="large" />
          <span className="text-sm">huyen_cute</span>
        </div>
        <Button isBlock>Login</Button>
        <a className="mt-6 text-sm" href="#">
          Switch accounts
        </a>
      </div>
    </div>
  );
}
