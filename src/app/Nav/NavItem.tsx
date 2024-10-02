"use client";
import { NavItemDto } from "../models/Nav/NavItemDto";

export function NavItem({ nav }: { nav: NavItemDto }) {
  let href = nav.url;

  if (nav.idHref) {
    href = `#${nav.idHref}`;
  }

  href ??= "";

  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        {nav.title}
      </a>
    </li>
  );
}
