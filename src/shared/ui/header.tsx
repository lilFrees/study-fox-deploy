"use client";

import { Button } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeBtn from "./dark-mode-btn";
import Logo from "./logo";

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

  if (pathname.includes("auth")) {
    return null;
  }

  return (
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
    </div>
  );
}

export default Header;
