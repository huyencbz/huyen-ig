import { createFileRoute } from "@tanstack/react-router";
import { Toolbar } from "../../components/Toolbar/Toolbar";
import { Layout } from "../../components/Layout/Layout";
import { Header } from "./-Header";
import { Menu } from "./-Menu";
import { Video } from "./-Video";
import { Body } from "./-Body";

export const Route = createFileRoute("/reels/")({
  component: Reels,
});
function Reels() {
  return (
    <Layout
      footer={
        <Toolbar
          atLikeScreen
          avatar="https://randomuser.me/api/portraits/men/88.jpg"
        />
      }
    >
      <div className="flex justify-center fixed top-0 left-0 right-0 bottom-[56px] sm:max-w-[480px] sm:left-[calc((100%-480px)/2)]">
        <Header />
        <Menu />
        <Body />
        <Video />
      </div>
    </Layout>
  );
}
