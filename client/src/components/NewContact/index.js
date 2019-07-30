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

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        let confirmContact;

        if (this.state.addContact) {
            console.log("adding contact...")
        }
    }

}
