import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

// import NavItem from "./NavItem"; // Import the new component

function NavItem({ href, label, isActive, getActiveClass }) {
  return (
    <div className="flex flex-col items-center justify-start">
      <Link
        className={`w-12 h-12 rounded-full flex justify-center items-center hover:-translate-y-1 transition-transform ${getActiveClass(
          href
        )}`}
        href={href}
      >
        {label}
      </Link>
      {isActive && <div className="mb-1 w-1 h-1 rounded-full bg-white"></div>}
    </div>
  );
}

function Navbar() {
  const router = useRouter();
  const [isOptionsActive, setIsOptionActive] = useState(false);

  const getActiveClass = (path) => {
    return router.pathname === path
      ? "bg-blue-500 hover:bg-blue-800 -translate-y-2 hover:-translate-y-3" // Active tab style
      : "bg-yellow-800 hover:bg-slate-400"; // Inactive tab style
  };

  const isCurrentActiveClass = (path) => {
    return router.pathname === path;
  };

  return (
    <div className="h-14 p-1 gap-2 bg-red-400 rounded-full flex justify-center items-center">
      <NavItem
        href="/"
        label="H"
        isActive={isCurrentActiveClass("/")}
        getActiveClass={getActiveClass}
      />
      <NavItem
        href="/education"
        label="E"
        isActive={isCurrentActiveClass("/education")}
        getActiveClass={getActiveClass}
      />
      <NavItem
        href="/experience"
        label="E"
        isActive={isCurrentActiveClass("/experience")}
        getActiveClass={getActiveClass}
      />
      <NavItem
        href="/projects"
        label="P"
        isActive={isCurrentActiveClass("/projects")}
        getActiveClass={getActiveClass}
      />
      <NavItem
        href="/activity"
        label="A"
        isActive={isCurrentActiveClass("/activity")}
        getActiveClass={getActiveClass}
      />

      {!isOptionsActive ? (
        <div
          className={`w-12 h-12 rounded-full flex justify-center items-center bg-yellow-800 hover:bg-slate-400 cursor-pointer`}
          onClick={() => setIsOptionActive(!isOptionsActive)}
        >
          O
        </div>
      ) : (
        <div className="flex flex-col gap-2 bg-red-300 rounded-full border-t -translate-y-[84px]">
          <div
            className={`w-12 h-12 rounded-full flex justify-center items-center bg-yellow-800 hover:bg-slate-400 cursor-pointer`}
            onClick={() => setIsOptionActive(!isOptionsActive)}
          >
            TH
          </div>
          <div
            className={`w-12 h-12 rounded-full flex justify-center items-center bg-yellow-800 hover:bg-slate-400 cursor-pointer`}
            onClick={() => setIsOptionActive(!isOptionsActive)}
          >
            E
          </div>
          <div
            className={`w-12 h-12 rounded-full flex justify-center items-center bg-yellow-800 hover:bg-slate-400 cursor-pointer`}
            onClick={() => setIsOptionActive(!isOptionsActive)}
          >
            T
          </div>
          <div
            className={`w-12 h-12 rounded-full flex justify-center items-center bg-yellow-800 hover:bg-slate-400 cursor-pointer`}
            onClick={() => setIsOptionActive(!isOptionsActive)}
          >
            C
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
