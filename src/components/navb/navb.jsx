import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getToken, removeToken } from "../../utils/tokenStorage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

export default function Example() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    setUser(null);
    navigate("/login");
  };

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About", href: "/about", current: false },
    { name: "Forum", href: "/forum", current: false },
    { name: "Blog", href: "/Blog", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const location = useLocation();
return (
  <Disclosure as="nav" className="sticky top-0 z-50 bg-white h-20">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-5">
      <div className="flex h-20 items-center justify-between w-full">
        {/* Sinistra (hamburger + logo mobile) */}
        <div className="flex items-center sm:hidden gap-2">
          <Link to="/">
          <img
            src="/public/logo-SR-nero.png"
            alt="Logo mobile"
            className="h-10 w-auto block sm:hidden"
          />
          </Link>
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-red-500 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
            <span className="sr-only">Apri menu principale</span>
            <Bars3Icon
              aria-hidden="true"
              className="block size-6 group-data-open:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden size-6 group-data-open:block"
            />
          </DisclosureButton>
        </div>

        {/* Centro (logo desktop + menu) */}
        <div className="flex items-center gap-8">
          <Link to="/">
          <img
            src="/public/logo-SR-nero.png"
            alt="Logo"
            className="h-14 w-auto hidden sm:block"
          />
          </Link>
          <div className="hidden sm:flex space-x-4">
            {navigation.map((item) => {
              const isCurrent = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    isCurrent
                      ? "bg-red-500 text-white"
                      : "text-black hover:bg-red-500 hover:text-white duration-300",
                    "rounded-md px-3 py-2 font-medium text-xl"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Destra (profilo utente o login) */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-xl">Ciao, {user.username}</span>
              <Menu as="div" className="relative">
                <div>
                  <MenuButton className="flex rounded-full bg-red-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="sr-only">Apri il menu utente</span>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                      alt="Avatar"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <Link
                      to="/userprofile"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Visualizza profilo
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Esci
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </>
          ) : (
            <Link
              to="/Login"
              className="relative overflow-hidden border border-red-500 bg-white px-1 rounded shadow-2xl transition-all before:absolute before:inset-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:text-white text-red-500"
            >
              <span className="relative z-10 text-2xl">Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3 bg-white">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-black hover:bg-red-500 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  </Disclosure>
);

}
