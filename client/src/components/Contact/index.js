import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";

let ccStyle= {
  name: {
    align: "center",
    color: "white",
    paddingRight: 40,
    paddingLeft: 40
  },
  firstCol: {
    padding: 0,
    marginRight: 0
  },

}

class Contact extends Component {
  constructor(props) {
    super(props);
    // props.payload currently has: id, name

    this.state = { // This data is perhaps with props
      userid: 0,
      name: ""
    };
  }

  socialButtonClick = (event) => {
    let { payload } = this.props; // This will need to be customized once

    console.log(`User ${payload.id}: ${payload.firstName} ${payload.lastName}`);
    let { target } = event;

    this.props.swapView("One Contact", payload.id, target.name);
  }

  render() {
    let { payload } = this.props; // This will need to be customized once

    return (
      <div className="container-fluid">
        <hr></hr>
        <div className="row">
          <div className="col-md-2" style={ccStyle.firstCol}>
            <img src="https://via.placeholder.com/128" alt="Contact" />
          </div>
          <div className="col-md-3 my-auto">
            <a className="waves-effect waves-light btn-large red" style={ccStyle.name} onClick={this.socialButtonClick}><p userId={payload.id}>{payload.firstName}</p></a>
            {console.log(JSON.stringify(this.props.payload, null, 2))}
          </div>
          <div className="col-md-7 my-auto">
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
