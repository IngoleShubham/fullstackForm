import React from "react";
import Link from "next/link";
import style from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <div><h1>Fullstack Form</h1></div>
          <div className={style.links}>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="users">
              <li>Users</li>
            </Link>
            <Link href="/">
              <li>SignUp</li>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
