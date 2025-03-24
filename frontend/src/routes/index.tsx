import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import Logo from "../assets/logo.svg?react";
import { Avatar, Button, Divider } from "@ig/components";
import { withAuth } from "@ig/shared";

function IndexComponent() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center flex-col h-screen justify-center">
        <div className="flex flex-col items-center justify-center w-2/3">
          <div className="sr-only">Instagram logo</div>
          <Logo className="mb-12" aria-hidden />
          <div className=" flex flex-col gap-2 mb-2 items-center">
            <Avatar
              size="large"
              src="https://randomuser.me/api/portraits/men/35.jpg"
            />
            <span className="text-sm">huyen_cute</span>
          </div>
          <Button
            isBlock
            onClick={() => {
              navigate({ to: "/main" });
            }}
            color="primary"
          >
            Login
          </Button>
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

const Index = withAuth(IndexComponent);

export const Route = createFileRoute("/")({
  component: Index,
});
