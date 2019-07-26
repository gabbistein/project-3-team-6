import React from "react";
import Facebook from "../FacebookLogin/login";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Stem <span role="img" aria-label="Logo">🌱</span>
      </a>
      <a className="navbar-brand" href="/addressBook">
        My Address Book
      </a>
      <a className="navbar-brand" href="/newContact">
        Add Contact +
      </a>
    </nav>
  );
}

export default Nav;
