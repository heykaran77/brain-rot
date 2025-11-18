import React from "react";

const NavBar = () => {
  const links = [
    { id: 2, name: "Blog", href: "/blog" },
    { id: 3, name: "Services", href: "/services" },
    { id: 5, name: "Contact", href: "/contact" },
  ];

  return (
    <div className="my-4 flex w-full max-w-4xl items-center justify-between text-white">
      <img src="./Orange DP.jpg" alt="" className="h-10 w-10 rounded-full" />
      <div>
        {links.map((link, idx) => (
          <a
            key={idx}
            className="mr-4 text-sm text-white hover:text-amber-500"
            href={`${link.href}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
