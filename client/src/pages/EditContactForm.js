import React, { Component } from "react";
import EditContact from "../components/EditContact";
import Nav from "../components/Nav";

class EditContactForm extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <Nav />
        <EditContact />
      </div>
    );
  }
}

export default EditContactForm;
