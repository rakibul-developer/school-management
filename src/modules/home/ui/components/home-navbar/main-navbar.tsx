// app/components/MainNavbar.tsx
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import CustomButton from "@/components/custome-button";
import NavigationLinks from "./navigation-links";
import MobileDrawer from "./mobile-drawer";

export const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="container mx-auto py-4 flex justify-between items-center">
      <div className="flex items-center gap-3 justify-between w-full md:w-auto px-4 md:px-0">
        <Link href="/">
          <Image src="/logo.jpg" height={80} width={80} alt="Logo" />
        </Link>
        <button
          className="md:hidden ml-4"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationLinks />
          </NavigationMenuList>
        </NavigationMenu>
        <CustomButton />
      </nav>

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
