import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../assets/logo.svg";
import { Avatar } from "../components/Avatar/Avatar";
import { Button } from "../components/Button/Button";
import { Divider } from "../components/Divider/Divider";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="flex items-center flex-col h-screen justify-center">
        <div className="flex flex-col items-center justify-center w-2/3">
          <img className="mb-10" src={logo}></img>
          <div className=" flex flex-col gap-2 mb-2 items-center">
            <Avatar
              size="large"
              src="https://randomuser.me/api/portraits/men/35.jpg"
            />
            <span className="text-sm">huyen_cute</span>
          </div>
          <Button isBlock>Login</Button>
          <Link className="mt-6 text-sm" to="/">
            Switch accounts
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-24">
          <Divider />
          <div className="text-sm mt-4 text-center text-gray-400">
            Don't have an account? <Link to="/">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
