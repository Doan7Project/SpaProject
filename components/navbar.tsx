import * as React from "react";
import Styles from "../components/navbar.module.css";
import StylesDrop from "./dropdown.module.css";
import useOnclickOutside from "react-cool-onclickoutside";
import { dropdowlist } from "../src/images/dropdowlist";
import Link from "next/link";
import Image from "next/image";
import Logo from "../src/images/slack.png";
import Facebook from "../images/facebook.png";
import Tiktok from "../images/tik-tok.png";
import Instagram from "../images/instagram.png";
import Phone from "../images/phone-call.png";
import { link } from "fs";
export interface NavBarProps {}

export default function NavBar(props: NavBarProps) {
  const [active, setActive] = React.useState(false);
  const ref = useOnclickOutside(() => {
    setActive(false);
  });
  const showDropList = () => {
    setActive(!active);
  };
  const [isOpen, setisOpen] = React.useState(false);
  const showMenubar = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className={Styles.MainHeader}>
      <header className={Styles.header}>
        {/* Logo */}
        <div>
          <Image src={Logo} width={40} height={40}></Image>
        </div>
        {/* navbar */}
        <div className={Styles.line} onClick={showMenubar}>
          <div className={ isOpen === false
                ? Styles.line1
                : Styles.line1 + " " + Styles.effectline1}></div>
          <div
            className={
              isOpen === false
                ? Styles.line2
                : Styles.line2 + " " + Styles.effectline2
            }
          ></div>
          <div className={ isOpen === false
                ? Styles.line3
                : Styles.line3 + " " + Styles.effectline3}></div>
        </div>
        <nav className={isOpen ===false ? Styles.navbar:Styles.navbar+' '+Styles.activeMenu}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={Styles.dropList} onClick={showDropList}>
              <a href="#">Services</a>
              {/* <DropDown/> */}
              <div
                className={
                  active === false
                    ? StylesDrop.dropDowList
                    : StylesDrop.dropDowList + " " + StylesDrop.showServiceList
                }
                ref={ref}
              >
                {dropdowlist.map((list, index) => {
                  return (
                    <div className={StylesDrop.rowList} key={list.id}>
                      <div>
                        <Link href={list.path}>
                          <div>
                            <a>{list.title}</a>
                            <p className={StylesDrop.content}>{list.content}</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
            <li>
              <Link href="/about">
                <a>Teacher</a>
              </Link>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <div className={Styles.logoResponsive}>
            <span>LOGO DROPDOWLIS</span>
          </div>
        </nav>

        <div className={Styles.advertise}>
          {/* <div>
            <Image src={Facebook} width={20} height={20} />
          </div>
          <div>
            <Image src={Tiktok} width={20} height={20} />
          </div>
          <div>
            <Image src={Instagram} width={20} height={20} />
          </div> */}
        </div>
      </header>
    </div>
  );
}
