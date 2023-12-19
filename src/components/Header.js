import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MobileMenuButton from "./features/MobileMenuButton";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Joe Cusano
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          {/* <li>
            <a href="/#projects">Projects</a>
          </li> */}
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <div className="flex flex-col space-y-2 px-5">
          <MobileMenuButton clickFunction={handleToggle} text={"About"} link={"/#about"}/>
          {/* <MobileMenuButton clickFunction={handleToggle} text={"Projects"} link={"/#projects"}/> */}
          <MobileMenuButton clickFunction={handleToggle} text={"Contact"} link={"/#contact"}/>
        </div>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;