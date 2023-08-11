"use client"

import { usePathname } from "next/navigation";

import NavButton from "@/components/NavButton";
import { Paths } from "@/app/utils/constants";

const ROUTES = [
  {
    name: "Home",
    link: Paths.HOME,
  },
  {
    name: "About us",
    link: Paths.ABOUT_US,
  },
  {
    name: "Features",
    link: Paths.FEATURES,
  },
  {
    name: "Pricing",
    link: Paths.PRICING,
  },
  {
    name: "FAQ",
    link: Paths.FAQ,
  },
  {
    name: "Contact",
    link: Paths.CONTACT,
  },
];

const NavBar = () => {
  const pathname = usePathname()
  return (
    <div className="flex justify-between w-[610px]">
      {ROUTES.map((path) => (
        <NavButton
          key={path.name}
          href={path.link}
          title={path.name}
          currentPath={pathname}
        />
      ))}
    </div>
  );
};

export default NavBar;
