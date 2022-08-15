import * as React from "react";
import Link from "next/link";
import { navLinks } from "../data";
import StyleHeader from '../conponents/header.module.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
export interface HeaderConponentProps {

}

export default function HeaderConponent(props: HeaderConponentProps) {
  return (
    <header>
      <nav className={StyleHeader.navbar}>
        {navLinks.map((link, index) => {
          return (
            <ul className={StyleHeader.ulnavbar} key={index}>
              <Link href={link.path}>
                <li >
                  <a href=""> {link.name}</a>
                </li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}
