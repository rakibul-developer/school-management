import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const NavigationLinks = () => (
  <>
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/" className={navigationMenuTriggerStyle()}>
          Home
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/courses" className={navigationMenuTriggerStyle()}>
          Courses
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/about" className={navigationMenuTriggerStyle()}>
          About
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[200px] gap-3 p-4">
          <li>
            <NavigationMenuLink asChild>
              <Link
                href="/facilities"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-sm font-medium">Facilities</div>
              </Link>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <Link
                href="/faculty"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-sm font-medium">Faculty</div>
              </Link>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <Link
                href="/events"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-sm font-medium">Events</div>
              </Link>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <Link
                href="/gallery"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-sm font-medium">Gallery</div>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/contact" className={navigationMenuTriggerStyle()}>
          Contact
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </>
);

export default NavigationLinks;
