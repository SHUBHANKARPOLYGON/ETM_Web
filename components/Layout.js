import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className="bg-black ">
      <Nav />
      <main className="mt-[6rem]">{children}</main>
      <Footer />
    </div>
  );
}
