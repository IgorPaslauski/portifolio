import { NavDto } from "../models/Nav/NavDto";
import { NavItemDto } from "../models/Nav/NavItemDto";
import { NavItem } from "./NavItem";

const retornarNavs = async () => {
  /*const response = await fetch(
    `${process.env.REACT_APP_API_URL}/data/navs.json`
  );
*/ const navs = JSON.parse(`{
  "navs": [
    {
      "id": 1,
      "title": "Sobre Mim",
      "url": "",
      "subnavs": [
        {
          "id": 1,
          "title": "Quem Sou",
          "url": "/quem-sou"
        },
        {
          "id": 2,
          "name": "O Que Faço",
          "url": "/o-que-faco"
        },
        {
          "id": 3,
          "title": "Onde Estou",
          "url": "/onde-estou"
        }
      ]
    },
    {
      "id": 2,
      "title": "Projetos",
      "url": "",
      "subnavs": [
        {
          "id": 1,
          "title": "Projetos Pessoais",
          "url": "/projetos-pessoais"
        }
      ]
    }
  ]
}
`);
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
