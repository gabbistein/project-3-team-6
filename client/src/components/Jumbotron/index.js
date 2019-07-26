import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div
      className="jumbotron AddressBookOne" 
    >
      {children}
    </div>
  );
}

export default Jumbotron;