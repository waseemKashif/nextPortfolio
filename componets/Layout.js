import Link from "next/link";
import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { DarkModeContext } from "../pages/api/darkModeContext";
import React from "react";
// import styles from "../styles/navbarStyle.css"
import navStyle from "../styles/navbarStyle.module.css"
// import  '../styles/globals.css';
import Header from './Header'


const Layout = ({children}) => {
 const {setDarkMode,darkMode} = useContext(DarkModeContext)
  return (
    <>
      <div className={navStyle.container}>
        <h1
          className={` ${navStyle.logo} text-lg sm:text-xl font-bold dark:text-white `}
        >
          DevelopedByWaseem
        </h1>
        <ul className="flex ">
          <li className=" text-white py-2 px-4 rounded-md mx-8 bg-blue-500 hover:bg-blue-800 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className=" text-white py-2 px-4 rounded-md mx-8 bg-blue-500 hover:bg-blue-800 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
        </ul>

        <ul className="flex flex-row  items-center">
          <li>
            <BsFillMoonStarsFill
              className=" transition duration-300 ease-in-out  cursor-pointer fill-gray-500 text-2xl hover:fill-gray-900 transform hover:-translate-y-1 hover:scale-110 dark:fill-white "
              onClick={() => setDarkMode(!darkMode)}
            />
          </li>
          <li>
            <a
              href="#"
              className="transition duration-500 ease-in-out text-white py-2 px-4 rounded-md ml-8 bg-blue-500 hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110   "
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <Header />
      {children}
    </>
  );
}

export default Layout