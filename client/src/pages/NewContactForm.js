import React, { Component } from "react";
import AddNewContact from "../components/AddNewContact";
import Nav from "../components/Nav";

class NewContactForm extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <Nav />
        <AddNewContact />
      </div>
    );
  }
}

export default NewContactForm;
