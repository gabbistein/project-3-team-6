import React from "react";
import "./style.css";

function AddressBookJumbo({ children }) {
  return (
    <div className="jumbotron addressBookJumbotron">
      {children}
    </div>
  );
}

export default AddressBookJumbo;