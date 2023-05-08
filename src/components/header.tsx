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
      <div className="flex-none">
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
