// app/components/mobile-drawer.tsx
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavigationLinks from "./navigation-links";
import CustomButton from "@/components/custome-button";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} className="text-xl" aria-label="Close Menu">
            ✕
          </button>
        </div>

        <nav className="p-4">
          <NavigationMenu className="flex flex-col">
            <NavigationMenuList className="flex flex-col space-y-2">
              <NavigationLinks />
            </NavigationMenuList>
          </NavigationMenu>
          <CustomButton />
        </nav>
      </aside>
    </>
  );
};

export default MobileDrawer;
