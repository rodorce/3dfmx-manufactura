import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { Menu } from "iconoir-react";
const Navbar = () => {
  const [background, setBackground] = useState("bg-white h-fit");
  const [showMenu, setShowMenu] = useState("hidden lg:flex");

  const handleMenu = () => {
    background == "bg-white h-fit"
      ? setBackground("bg-[#f8faff] h-full")
      : setBackground("bg-white h-fit");
    showMenu === "hidden lg:flex"
      ? setShowMenu("flex")
      : setShowMenu("hidden lg:flex");
  };

  return (
    <nav
      className={`${background} fixed lg:bg-transparent flex container py-2 lg:gap-4 z-50 lg:text-white text-black flex-col lg:flex-row lg:relative`}
    >
      <div className="flex flex-row-reverse items-center">
        <Menu
          className="lg:hidden text-black self-center"
          onClick={handleMenu}
        />
        <img
          className="py-1 w-64 justify-self-start mr-auto"
          src="/assets/img/logo-3df.png"
          alt="3d-factory"
        />
      </div>
      <ul
        className={`${showMenu} flex-col text-center lg:flex-row flex-1 justify-start lg:justify-end items-center gap-9 text-bookmark-black text-sm`}
      >
        <li className="cursor-pointer">
          <a href="#">Inicio</a>
        </li>
        <a href="#recommendation">
          <li className="cursor-pointer">Nuestra recomendación</li>
        </a>
        <Link href="/manufacturing" passHref>
          <li className="cursor-pointer">Procesos de manufactura</li>
        </Link>
        <Link href="/materials" passHref>
          <li className="cursor-pointer">Materiales</li>
        </Link>
        <li onClick={() => Router.push("/blog")}>Blog</li>
        <li>
          <a href="mailto:ventas@3dfatory.mx">
            <button
              type="button"
              className="md:flex text-sm bg-bookmark-purple text-white rounded-md py-3 px-7 hover:bg-indigo-600 hover:text-white transition shadow-lg"
            >
              Cotiza ahora
            </button>
          </a>
        </li>
      </ul>
      <div className="flex md:hidden flex-1 justify-end">
        <i className="text-2xl fas fa-bars text-white"></i>
      </div>
    </nav>
  );
};

export default Navbar;
