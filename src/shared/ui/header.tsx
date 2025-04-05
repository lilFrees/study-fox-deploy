"use client";

import { Button } from "antd";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { AiFillMoon, AiFillSun } from "react-icons/ai";
import { setCookie } from "cookies-next";

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
  const { setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className="container mx-auto flex w-full items-center gap-10 p-4">
      <Link
        href="/"
        className="text-primary block w-max font-sans font-black tracking-[3px]"
      >
        STUDY FOX
      </Link>
      <div className="flex items-center gap-8">
        {headerLinks?.map((link: any, i: number) => (
          <Link href={link.href} key={i} className="text-foreground w-max">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="ml-auto">
        <Button
          type="text"
          className="text-foreground h-8 w-8 border p-0"
          onClick={() => {
            setDarkMode(!darkMode);
            setTheme(darkMode ? "light" : "dark");
            setCookie("theme", darkMode ? "light" : "dark");
          }}
        >
          {darkMode ? (
            <AiFillMoon className="text-[20px]" />
          ) : (
            <AiFillSun className="text-[20px]" />
          )}
        </Button>
      </div>
      <div className="flex items-center gap-5">
        <Button type="text" size="large" className="text-black dark:text-white">
          Sign in
        </Button>
        <Button type="primary" size="large" className="">
          Create free account
        </Button>
      </div>
    </div>
  );
}

export default Header;
