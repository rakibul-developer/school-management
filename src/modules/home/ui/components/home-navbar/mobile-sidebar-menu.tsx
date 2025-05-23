"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import CustomButton from "@/components/custome-button";

export function MobileSidebarMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItemClass =
    "w-full flex justify-between items-center text-left font-semibold text-[15px] px-4 py-3 rounded-xl transition-colors hover:bg-muted";

  const subItemClass =
    "block text-sm font-medium px-4 py-2 text-muted-foreground rounded-lg transition-all hover:text-foreground hover:bg-muted/50";

  return (
    <div className="space-y-2 mt-10">
      <div className="flex items-center justify-center mb-6">
        <Link href="/">
          <Image src="/logo.jpg" height={80} width={80} alt="Logo" />
        </Link>
      </div>
      {/* Products Menu */}
      <Collapsible
        open={openMenu === "products"}
        onOpenChange={() => toggleMenu("products")}
      >
        <CollapsibleTrigger asChild>
          <button className={menuItemClass}>
            <span>🛍️ Products</span>
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", {
                "rotate-180": openMenu === "products",
              })}
            />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 pl-6 pt-1">
          <Link href="/products" className={subItemClass}>
            All Products
          </Link>
          <Link href="/docs" className={subItemClass}>
            Introduction
          </Link>
          <Link href="/docs/installation" className={subItemClass}>
            Installation
          </Link>
        </CollapsibleContent>
      </Collapsible>

      {/* Components Menu */}
      <Collapsible
        open={openMenu === "components"}
        onOpenChange={() => toggleMenu("components")}
      >
        <CollapsibleTrigger asChild>
          <button className={menuItemClass}>
            <span>📦 Components</span>
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", {
                "rotate-180": openMenu === "components",
              })}
            />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 pl-6 pt-1">
          <Link href="/docs/primitives/alert-dialog" className={subItemClass}>
            Alert Dialog
          </Link>
          <Link href="/docs/primitives/hover-card" className={subItemClass}>
            Hover Card
          </Link>
          <Link href="/docs/primitives/progress" className={subItemClass}>
            Progress
          </Link>
        </CollapsibleContent>
      </Collapsible>

      {/* Documentation Link */}
      <Link
        href="/docs"
        className="block font-semibold text-[15px] px-4 py-3 rounded-xl hover:bg-muted transition-colors"
      >
        📚 Documentation
      </Link>

      <div className="flex items-center justify-center mt-6">
        <CustomButton />
      </div>
    </div>
  );
}
