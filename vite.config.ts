import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    svgr({
      svgrOptions: {
        replaceAttrValues: {
          "#262626": "currentColor",
        },
      },
    }),
  ],
});
