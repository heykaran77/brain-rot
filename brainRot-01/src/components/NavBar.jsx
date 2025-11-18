import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const links = [
    { id: 2, name: "Blog", href: "/blog" },
    { id: 3, name: "Services", href: "/services" },
    { id: 5, name: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative my-4 flex w-full max-w-4xl items-center justify-between rounded-full bg-neutral-700/10 p-2 text-white backdrop-blur-sm">
      <img src="./Orange DP.jpg" alt="" className="h-10 w-10 rounded-full" />
      <div className="mr-8 hidden items-center gap-4 text-sm text-white md:flex">
        {links.map((link, idx) => (
          <a className="hover:text-amber-500" key={idx} href={`${link.href}`}>
            {link.name}
          </a>
        ))}
      </div>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <GiHamburgerMenu className="mr-4 h-5 w-5" />
      </div>

      {isOpen && (
        <div className="absolute inset-x-0 top-15 mx-auto max-w-[90%] rounded-md bg-neutral-300">
          <div className="text-md flex flex-col items-start p-4 text-neutral-700 md:hidden">
            {links.map((link, idx) => (
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className="hover:text-amber-500"
                key={idx}
                href={`${link.href}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
