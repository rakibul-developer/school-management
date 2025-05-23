"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { MobileSidebarMenu } from "./mobile-sidebar-menu";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="w-95 p-4 bg-white">
        <MobileSidebarMenu />
      </SheetContent>
    </Sheet>
  );
};
