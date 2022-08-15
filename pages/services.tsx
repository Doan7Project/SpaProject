import * as React from "react";
import HeaderConponent from "./src/conponents/header";

export interface ServicePageProps {}

export default function ServicePage(props: ServicePageProps) {
  return (
    <div>
      <HeaderConponent />
      <span>Service Page</span>
    </div>
  );
}
