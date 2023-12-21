import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "fixed", top: 0, right: 0, left: 0, zIndex: 3 }}>
        <Header></Header>
      </div>
      <div style={{height: "80px"}}></div>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
}
