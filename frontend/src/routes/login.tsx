import { createFileRoute, useNavigate } from "@tanstack/react-router";
import Logo from "../assets/logo.svg?react";
import Back from "../assets/back.svg?react";
import facebook from "../assets/facebook.svg";
import { TextInput, Divider, Button } from "@ig/components";
import { useEffect, useState } from "react";
import api from "../api";
import { useAuth } from "../context/AuthContext";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/main" });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post("/accounts/login", {
        username,
        password,
      });
      if (response.data.token) {
        login(response.data.token);
      }
    } catch (error) {
      setMessage("Login failed!");
    }
  };

  return (
    <>
      <div className="flex relative h-screen justify-center flex-col items-center text-sm">
        <button className="w-2/3 absolute top-10">
          <Back />
        </button>
        <Logo className="mb-12" title="Instagram" />
        <form className="flex flex-col mb-8 gap-2 items-center w-2/3">
          <TextInput
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            isBlock
            placeholder="Username"
            type="text"
          />
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            isBlock
            placeholder="Password"
            type="password"
          />
          <div className="self-end mb-8">
            <a className="text-xs text-blue-500 hover:text-blue-800" href="#">
              Forgot password?
            </a>
          </div>
          <Button isBlock color="primary" onClick={handleSubmit}>
            Login
          </Button>
          {message && <p>{message}</p>}
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
