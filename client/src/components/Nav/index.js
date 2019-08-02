import React from "react";
import Logout from "../Logout"
// import Facebook from "../FacebookLogin/login";

let navStyles = {
  logo: {
    paddingLeft: 15,
    fontFamily: "Berkshire Swash, cursive",
    fontSize: 40,
    fontWeight: "bold"
}
}

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <a href="/" className="brand-logo" style={navStyles.logo}>Stem</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/addressBook">My Address Book</a></li>
          <li><a href="/newContact">Add Contact +</a></li>
          <li><Logout /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
