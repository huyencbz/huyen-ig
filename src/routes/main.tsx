import { createFileRoute } from "@tanstack/react-router";
import { Divider } from "../components/Divider/Divider";
import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";
import share from "../assets/share.svg";
import feed from "../assets/feed.svg";
export const Route = createFileRoute("/main")({
  component: () => (
    <div>
      <div className="absolute inset-y-0 w-full">
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center space-x-12 px-4 pt-2">
            <a href="/">
              <img src={camera} alt="camera" />
            </a>
            <img src={logo} alt="instagram" className="h-8 grow" />
            <div className="flex items-center gap-4 ">
              <a href="/">
                <img src={feed} alt="feed" />
                <span className="absolute bg-red-500 rounded w-2 h-2 top-4 right-14" />
              </a>
              <a href="/">
                <img src={share} alt="share" />
              </a>
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </div>
  ),
});
