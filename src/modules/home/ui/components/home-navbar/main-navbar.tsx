// The imports of next js
import Link from "next/link";
import Image from "next/image";


// The imports of components
import CustomButton from "@/components/custome-button";
import { NavigationLinks } from "./navigation-links";
import { MobileSidebar } from "./mobile-sidebar";

export const MainNavbar = () => {
  return (
    <header className="container mx-auto py-4 flex justify-between items-center">
      <div className="flex items-center gap-3 justify-between w-full md:w-auto px-4 md:px-0">
        <Link href="/">
          <Image src="/logo.jpg" height={80} width={80} alt="Logo" />
        </Link>
        <MobileSidebar />
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <NavigationLinks />
        <CustomButton />
      </nav>
    </header>
  );
};
