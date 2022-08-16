import * as React from "react";
import Link from "next/link";
import StyleHeader from "../components/header.module.css";
import { menuDatas } from "./menuData";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import { HomeIcon } from "@radix-ui/react-icons";
import homeIcon from '../../images/home-button.png'
export interface HeaderConponentProps {}

export default function HeaderConponent(props: HeaderConponentProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  false;

  const showMenubar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={StyleHeader.MainHeader}>
      <div className={StyleHeader.header}>
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
          {menuDatas.map((link, index) => {
            return (
              <div key={index}>
                <Link href={link.path}>
                  <div onClick={showMenubar}>
                  <img src="homeIcon" alt="" />

                    <a href="">
                      {link.title}
                      {/* submenu */}
                    </a>

                    <ul className={StyleHeader.dropMenu}>
                      {link.submenu?.map((f, index) => {
                        return (
                          <Link href={f.path} key={index}>
                            <li>
                              <label htmlFor="">Icon</label>
                              <a href="">{f.title}</a>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
