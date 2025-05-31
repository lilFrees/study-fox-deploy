"use client";

import { Button } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Marquee from "react-fast-marquee";
import DarkModeBtn from "./dark-mode-btn";
import Logo from "./logo";
import { useAuthStore } from "../../entities/user/model/useAuthStore";
import ProfilePopover from "../components/profile-popover";

const headerLinks: any = [
  // {
  //   label: "My Profile",
  //   href: "/",
  // },
  // {
  //   label: "Flashcards",
  //   href: "/",
  // },
  // {
  //   label: "Multiplayer",
  //   href: "/",
  // },
  // {
  //   label: "About us",
  //   href: "/",
  // },
];

function Header() {
  const pathname = usePathname();
  const { user } = useAuthStore();

  if (pathname.includes("auth") || pathname.includes("quiz-play")) {
    return (
      <div className="relative z-20 container mx-auto flex w-full items-center gap-10 p-4">
        <Logo />
        <div className="ml-auto">
          <DarkModeBtn />
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <Marquee
        className="bg-background text-foreground m-0 w-screen overflow-hidden p-0 text-xs"
        speed={20}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="mr-5">
            The system is in development, please be patient
          </p>
        ))}
      </Marquee>
      <div className="relative z-20 container mx-auto flex w-full items-center gap-10 p-4">
        <Logo />
        <div className="flex items-center gap-8">
          {headerLinks?.map((link: any, i: number) => (
            <Link href={link.href} key={i} className="text-foreground w-max">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto">
          <DarkModeBtn />
        </div>
        {user === null ? (
          <div className="flex items-center gap-5">
            <Button
              type="link"
              href="/auth/sign-in?source=auth"
              size="large"
              className="text-black dark:text-white"
            >
              Sign in
            </Button>
            <Button
              type="primary"
              href="/auth/sign-up?source=auth"
              size="large"
              className="bg-foreground text-background"
            >
              Create free account
            </Button>
          </div>
        ) : (
          <ProfilePopover />
        )}
      </div>
    </div>
  );
}

export default Header;
