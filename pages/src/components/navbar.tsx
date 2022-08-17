import * as React from "react";
import Styles from "../components/navbar.module.css";
import DropDown from "./dropdown";
import Image from "next/image";
import Logo from "../images/slack.png";
import Facebook from "../images/facebook.png";
import Tiktok from "../images/tik-tok.png";
import Instagram from "../images/instagram.png";
import Phone from "../images/phone-call.png";
export interface NavBarProps {}

export default function NavBar(props: NavBarProps) {
  return (
    <div className={Styles.MainHeader}>
      <header className={Styles.header}>
   
        {/* Logo */}
        <div>
          <Image src={Logo} width={40} height={40}></Image>
        </div>
        {/* navbar */}
        <div className={Styles.line}>
          <div className={Styles.line1}></div>
          <div className={Styles.line2}></div>
          <div className={Styles.line3}></div>
        </div>
        <nav className={Styles.navbar}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li className={Styles.dropList}>
              <a href="">Services</a>
              <DropDown />
            </li>
            <li>
              <a href="">Teacher</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className={Styles.advertise}>
          <div>
            <Image src={Facebook} width={20} height={20} />
          </div>
          <div>
            <Image src={Tiktok} width={20} height={20} />
          </div>
          <div>
            <Image src={Instagram} width={20} height={20} />
          </div>
        </div>
      </header>
    </div>
  );
}
