"use client";

import { TopNavbar } from "./top-navbar";
import { MainNavbar } from "./main-navbar";

export const HomeNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <TopNavbar />
      <MainNavbar />
    </div>
  );
};
