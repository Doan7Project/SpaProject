import * as React from "react";
import Link from "next/link";
import { navLinks } from "../data";
import { dropMenus } from "../data";
import StyleHeader from "../components/header.module.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
export interface HeaderConponentProps {}

export default function HeaderConponent(props: HeaderConponentProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  false;

  const showMenubar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={StyleHeader.header}>
      <div className={StyleHeader.hamburger} onClick={showMenubar}>
        <div
          className={
            isOpen === false
              ? StyleHeader.line1
              : StyleHeader.line1 + " " + StyleHeader.Line1Hamburger
          }
        ></div>
        <div
          className={
            isOpen === false
              ? StyleHeader.line2
              : StyleHeader.line2 + " " + StyleHeader.line2Hamburger
          }
        ></div>
        <div
          className={
            isOpen === false
              ? StyleHeader.line3
              : StyleHeader.line3 + " " + StyleHeader.Line3Hamburger
          }
        ></div>
      </div>
      <label className={StyleHeader.logo}>LOGO</label>
      <nav
        className={
          isOpen === false
            ? StyleHeader.navbar
            : StyleHeader.navbar + " " + StyleHeader.activeMenu
        }
      >
        {navLinks.map((link, index) => {
          return (
            <div key={index}>
              <Link href={link.path}>
                <div>
                  <a href="" onClick={showMenubar}>
                    {link.name}
                  </a>
                </div>
              </Link>
            </div>
          );
        })}
      </nav>
    </header>
  );
}
