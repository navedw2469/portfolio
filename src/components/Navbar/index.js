import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// import NavItem from "./NavItem"; // Import the new component

function NavItem({ href, icon, isActive, getActiveClass }) {
  return (
    <div className="flex flex-col items-center justify-start">
      <Link
        className={`w-12 h-12 rounded-full border border-gray-700 flex justify-center items-center hover:-translate-y-1 transition-transform ${getActiveClass(
          href
        )}`}
        href={href}
      >
        <Image src={icon} alt="" width={32} height={32} />
      </Link>
      {isActive && <div className="mb-1 w-1 h-1 rounded-full bg-white"></div>}
    </div>
  );
}

function Navbar() {
  const router = useRouter();
  const [isOptionsActive, setIsOptionActive] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  const getActiveClass = (path) => {
    return router.pathname === path
      ? "bg-gray-700 -translate-y-2 hover:-translate-y-3" // Active tab style
      : "bg-gray-900 hover:bg-gray-700"; // Inactive tab style
  };

  const isCurrentActiveClass = (path) => {
    return router.pathname === path;
  };

  return (
    <div className="h-16 p-2 gap-2 bg-black border border-gray-700 rounded-full flex justify-center items-center">
      <NavItem
        href="/"
        icon="/profile.svg"
        isActive={isCurrentActiveClass("/")}
        getActiveClass={getActiveClass}
      />
      <NavItem
        href="/projects"
        icon="/project.svg"
        isActive={isCurrentActiveClass("/projects")}
        getActiveClass={getActiveClass}
      />
      <NavItem
        href="/activity"
        icon="/activity.svg"
        isActive={isCurrentActiveClass("/activity")}
        getActiveClass={getActiveClass}
      />

      <div className="h-12 border border-gray-700 mx-2"></div>

      {isNightMode ? (
        <div
          className={`w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-700 hover:bg-gray-700 cursor-pointer`}
          onClick={() => setIsNightMode(!isNightMode)}
        >
          <Image src="/moon.svg" alt="" width={32} height={32} />
        </div>
      ) : (
        <div
          className={`w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-700 hover:bg-gray-700 cursor-pointer`}
          onClick={() => setIsNightMode(!isNightMode)}
        >
          <Image src="/sun.svg" alt="" width={32} height={32} />
        </div>
      )}

      {!isOptionsActive ? (
        <div
          className={`w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-700 hover:bg-gray-700 cursor-pointer`}
          onClick={() => setIsOptionActive(!isOptionsActive)}
        >
          <Image src="/options.svg" alt="" width={32} height={32} />
        </div>
      ) : (
        <div className="flex flex-col gap-2 bg-gray-900 rounded-full -translate-y-[112px]">
          <div
            className={`w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-700 hover:bg-gray-700 cursor-pointer`}
          >
            <Image src="/github1.svg" alt="" width={32} height={32} />
          </div>
          <div
            className={`w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-700 hover:bg-gray-700 cursor-pointer`}
          >
            <Image src="/linkedin.svg" alt="" width={32} height={32} />
          </div>
          <div
            className={`w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-700 hover:bg-gray-700 cursor-pointer`}
          >
            <Image src="/email.svg" alt="" width={32} height={32} />
          </div>
          <div
            className={`w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-700 hover:bg-gray-700 cursor-pointer`}
          >
            <Image src="/download.svg" alt="" width={32} height={32} />
          </div>
          <div
            className={`w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-700 hover:bg-gray-700 cursor-pointer`}
            onClick={() => setIsOptionActive(!isOptionsActive)}
          >
            <Image src="/cross.svg" alt="" width={32} height={32} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
