import React, { Component } from "react";

class NewContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        birthday: "",
        instagramLink: "",
        facebookLink: "",
        linkedinLink: "",
        twitterLink: "",
        addContact: false
    }

    componentDidMount() {

    }

    render() {
        let confirmContact;

        if (this.state.addContact) {
            console.log("adding contact...")
        }
    }

}
