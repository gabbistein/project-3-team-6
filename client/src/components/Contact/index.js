import React, { Component } from "react";

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

  removeButtonClick = (event) => {
    let { payload } = this.props; // This will need to be customized once

    console.log(`User ${payload.id}: ${payload.firstName} ${payload.lastName}`);
    // let { target } = event;

    this.props.deleteContact(payload.id);
  }

  render() {
    let { payload } = this.props; // This will need to be customized once
    console.log(payload);
    return (
      <div className="container-fluid">
        <div className="Contact row">
          <div className="col-sm-2 align-self-center">
            <img src="https://via.placeholder.com/128" alt="Contact" />
          </div>
          <div className="col-sm-2 align-self-center">
            <button className="btn" type="button" onClick={this.socialButtonClick} data-userid={payload.id}><p>{payload.firstName}</p></button>
          </div>
          <div className="col-sm-2 align-self-center">
            <button className="btn" type="button" onClick={this.removeButtonClick} data-userid={payload.id}><p>Remove</p></button>
          </div>
          <div className="col-sm-6 align-self-center">
            <button className="btn" id="twitter" name="twitter" data-userid={payload.id} onClick={this.socialButtonClick}>Twitter</button>
            <button className="btn" id="tumblr" name="tumblr" data-userid={payload.id} onClick={this.socialButtonClick}>Tumblr</button>
            <button className="btn" id="pinterest" name="pinterest" data-userid={payload.id} onClick={this.socialButtonClick}>Pinterest</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
