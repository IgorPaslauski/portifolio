import { config } from "process";
import { NavDto } from "../models/Nav/NavDto";
import { NavItemDto } from "../models/Nav/NavItemDto";
import { NavItem } from "./NavItem";

const retornarNavs = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/data/navs.json`
  );
  const navs = await response.json();
  return navs.navs as NavItemDto[];
};

export async function Nav() {
  const navs = new NavDto();
  navs.navs = await retornarNavs();

  const menus = navs.navs.map((nav: NavItemDto) => (
    <NavItem nav={nav} key={nav.id} />
  ));

  return (
    <nav className="w-1/5 p-4 h-screen bg-gray-800 text-white">
      <ul className="flex flex-col">{menus}</ul>
    </nav>
  );
}
