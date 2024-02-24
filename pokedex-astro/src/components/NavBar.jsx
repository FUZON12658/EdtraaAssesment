import React from "react";

export default function NavBar() {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-auto mr-auto">
          <a
            className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
            href="#"
          >
            <img
              className="mr-2 lg:scale-150 lg:mr-4"
              src="/assets/images/pokeball.png"
              style={{height: "20px"}}
              alt="TE Logo"
              loading="lazy"
            />
            <span className="font-medium dark:text-neutral-200">POKEDEX</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
