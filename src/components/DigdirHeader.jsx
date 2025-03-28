import React from "react";
import { Link } from "@digdir/designsystemet-react";
import "../styles/header.css";

export const DigdirHeader = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <a className="header-logo" href="/" title="KI Norge">
          KI Norge
        </a>
        <nav className="header-nav">
          <ul className="header-menu">
            <li>
              <Link href="/">Forsiden</Link>
            </li>
            <li>
              <Link href="/hva-er-ki-norge">Hva er KI Norge?</Link>
            </li>
            <li>
              <Link href="/blogg">Blogg</Link>
            </li>
            <li>
              <Link href="/om-oss">Om oss</Link>
            </li>
          </ul>
          <ul className="header-menu header-menu-right">
            <li>
              <Link href="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <button
          className="header-menu-button"
          aria-label="Meny"
          onClick={() => {
            const nav = document.querySelector(".header-nav");
            nav.classList.toggle("open");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default DigdirHeader;
