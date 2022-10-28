import React from "react";
import useToggle from "../hooks/useToggle";

const Layout = ({ children }) => {
  const [isLight, toggle] = useToggle();
  return (
    <div className={isLight ? "body" : "body dark"}>
      <header>
        <a
          href="https://www.geektrust.in/coding-problem/frontend/adminui"
          target="_blank"
          rel="noreferrer"
          style={{color: '#00ebc7'}}
        >
          Admin UI
        </a>
        <nav>
          <button className="toggle" onClick={toggle}>
            switch theme
          </button>
        </nav>
      </header>
      <main className="layout">{children}</main>
    </div>
  );
};

export default Layout;
