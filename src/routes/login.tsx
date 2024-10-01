import { createFileRoute } from "@tanstack/react-router";
import Logo from "../assets/logo.svg?react";
import Back from "../assets/back.svg?react";
import facebook from "../assets/facebook.svg";
import { Button } from "../components/Button/Button";
import { Divider } from "../components/Divider/Divider";
import { TextInput } from "../components/TextInput/TextInput";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <>
      <div className="flex relative h-screen justify-center flex-col items-center text-sm">
        <button className="w-2/3 absolute top-20">
          <Back />
        </button>
        <Logo className="mb-12" />
        <form className="flex flex-col mb-8 gap-2 items-center w-2/3">
          <TextInput isBlock placeholder="Username" type="text" />
          <TextInput isBlock placeholder="Password" type="password" />
          <div className="self-end mb-8">
            <a className="text-xs text-blue-500 hover:text-blue-800" href="#">
              Forgot password?
            </a>
          </div>
          <Button isBlock>Login</Button>
        </form>
        <div className="flex gap-2 items-center">
          <img src={facebook} alt="facebook" />
          <a className="text-xs" href="#">
            Switch accounts
          </a>
        </div>
      </div>
      <div className="relative bg-blue-500">
        <div className="absolute inset-x-0 bottom-0 h-24">
          <Divider label="OR" />
          <div className="text-xs mt-4 text-center text-gray-400">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
}
