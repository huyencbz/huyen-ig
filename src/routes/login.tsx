import { createFileRoute } from "@tanstack/react-router";
import logo from "../assets/logo.svg";
import { Avatar } from "../components/Avatar/Avatar";
import { Button } from "../components/Button/Button";
import { Divider } from "../components/Divider/Divider";
import { TextInput } from "../components/TextInput/TextInput";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <>
      <div className="flex items-center flex-col h-screen justify-center text-sm">
        <div className="flex flex-col items-center justify-center w-full">
          <img className="mb-10" src={logo}></img>
          <form className=" flex flex-col mb-2 gap-2 items-center w-2/3">
            <TextInput isBlock placeholder="Username" type="text" />
            <TextInput isBlock placeholder="Password" type="password" />
            <div className="self-end mb-8">
              <a className="text-xs text-blue-500 hover:text-blue-800" href="#">
                Forgot password?
              </a>
            </div>
            <Button isBlock>Login</Button>
          </form>
          <a className="mt-6 text-sm" href="#">
            Switch accounts
          </a>
        </div>
      </div>
      <div className="relative bg-blue-500">
        <div className="absolute inset-x-0 bottom-0 h-24">
          <Divider />
          <div className="text-sm mt-4 text-center text-gray-400">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
}
