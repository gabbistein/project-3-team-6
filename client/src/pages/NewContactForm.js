import React, { Component } from "react";
import AddNewContact from "../components/AddNewContact";
import Nav from "../components/Nav";

let newStyle= {
  marginBottom: 100
}

class NewContactForm extends Component {
  state = {

  };

  render() {
    return (
      <div style={newStyle}>
        <Nav />
        <AddNewContact />
      </div>
    );
  }
}

export default NewContactForm;
