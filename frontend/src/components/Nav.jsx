import React from "react";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">minedTALK</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Forum</a>
          </li>
          <li>
            <a>Data</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
