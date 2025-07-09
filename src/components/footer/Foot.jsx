import React from "react";
import { Link } from "react-router-dom";

export default function Foot() {
  return (
    <footer className="bg-white shadow-sm dark:bg-white">
      <div className="w-full text-center mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center dark:text-black rounded-md font-medium'">
          © 2025 ScuolaRibelle™. Tutti i diritti riservati.
        </span>
        <ul className="flex flex-wrap justify-center mt-3 text-sm font-medium text-black dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="/about"
              className=" text-black hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium' me-4 md:me-6 duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/privacypolicy"
              className=" text-black hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium  me-4 md:me-6 duration-300" 
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black hover:bg-red-500 hover:text-white  rounded-md px-3 py-2 text-sm font-medium duration-300 "
            >
              Contattaci
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
