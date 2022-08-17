import * as React from "react";
import Styles from "./dropdown.module.css";
import { dropdowlist } from "../src/images/dropdowlist";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
export interface DropDownProps {}

export default function DropDown(props: DropDownProps) {
  return (
    <div className={Styles.dropDowList}>
      {dropdowlist.map((list, index) => {
        return (
          <div className={Styles.rowList} key={list.id}>
            <div>
              <a href="">{list.title}</a>
              <p className={Styles.content}>{list.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
