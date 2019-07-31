import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";

class Contact extends Component {
  constructor(props){
    super(props);
    // props.payload currently has: id, name

    this.state = { // This data is perhaps with props
      userid: 0,
      name: "" 
    };
  }

  socialButtonClick = (event) => {
    console.log(`User ${event.target.dataset.userid}: ${event.target.name}`);
    let { target } = event;

    this.props.swapView("One Contact", target.dataset.userid, target.name);

  }

  render() {
    let {payload} = this.props; // This will need to be customized once

    return(
      <div className="container-fluid">
        <div className="Contact row">
          <div className="col s-2">
            <img src="https://via.placeholder.com/128" alt="Contact"/>
          </div>
          <div className="col s-4">
            <button type="button" onClick={this.socialButtonClick}><p>{payload.firstName}</p></button>
            <p>{JSON.stringify(this.props.payload)}</p>
          </div>
          <div className="col s-6">
          <button id="facebook" name="Facebook" data-userid={payload.id} onClick={this.socialButtonClick}>Facebook</button>
          <button id="instagram" name="Instagram" data-userid={payload.id} onClick={this.socialButtonClick}>Instagram</button>
          <button id="twitter" name="Twitter" data-userid={payload.id} onClick={this.socialButtonClick}>Twitter</button>
          <button id="linkedIn" name="LinkedIn" data-userid={payload.id} onClick={this.socialButtonClick}>LinkedIn</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
