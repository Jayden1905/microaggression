import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="max-w-8xl navbar mx-auto bg-base-100 px-3">
      <div className="flex-1">
        <Link
          href={"/"}
          className="text-3xl font-bold normal-case text-secondary"
        >
          Microaggression
        </Link>
      </div>
      <div className="dropdown-end dropdown block sm:hidden">
        <label tabIndex={0} className="btn-ghost btn-square btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/form`}>Form</Link>
          </li>
        </ul>
      </div>
      <div className="hidden flex-none sm:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/form`}>Form</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
