import React, { Component } from 'react';
import { Input, TextArea } from '../Form';
import validator from 'validator';
import Jumbotron from '../Jumbotron';
import API from "../../utils/API";
import Cookies from "js-cookie";
import './style.css';

let contactStyle = {
    title: {
        fontFamily: "Berkshire Swash, cursive",
        fontSize: 40,
        fontWeight: "bold",
        paddingBottom: 10
    },
    headers: {
        fontSize: 30,
        paddingBottom: 5,
        fontStyle: "italic"
    },
    button: {
        color: "white"
    }
}

class AddNewContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthday: "",
            phoneNumber: "",
            contactPhoto: [""],
            twitter: "",
            tumblr: "",                
            pinterest: "",
            notes: "",
            error: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let error = "";

        let required = [ // List of required fields using the input element's name/id as a string
            "firstName",
            "lastName",
            "email",
            "birthday",
            "phoneNumber"
        ]

        for (let entry of required) { // Iterate through list of required fields and check each one
            console.log(`Testing ${entry}`);
            let el = document.getElementById(entry); // Get input element by id
            el.classList.remove("errorBg"); // Remove error background color

            if (validator.isEmpty(this.state[entry])) { // Check if it's empty
                el.classList.add("errorBg"); // Add error background color
                error = `Required field is empty`; // Set error message
            }
        }

        if (!validator.isEmail(this.state.email)) { // Use validator to verify email format
            document.getElementById("email").classList.add("errorBg"); // Add error background color
            error = "Email is invalid"; // Set error message
        }

        if (!validator.isMobilePhone(this.state.phoneNumber)) { // Use validator to verify phone number format
            document.getElementById("phoneNumber").classList.add("errorBg"); // Add error background color
            error = "Phone Number is invalid."; // Set error message
        }

        if (!error) {
            console.log(`No errors! Submitting ${JSON.stringify(this.state)}`);

            let newContact = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                birthday: this.state.birthday,
                phoneNumber: this.state.phoneNumber,
                photos: [this.state.contactPhoto],
                notes: this.state.notes,
                socialMedia: {
                    twitter: { handle: this.state.twitter },
                    tumblr: { handle: this.state.tumblr },
                    pinterest: { handle: this.state.pinterest }
                }
            }

            // TODO: Submission code. Fix the client side api request. parameters may be messed up.
            console.log(JSON.stringify(newContact))
            API.addContact(`/${Cookies.get("google_id")}`, newContact)

            alert(`${newContact.firstName} ${newContact.lastName} has been added to your contacts!`)

            this.setState({
                error: "", // Clear error message
                firstName: "",
                lastName: "",
                email: "",
                birthday: "",
                phoneNumber: "",
                contactPhoto: [""],
                twitter: "",
                tumblr: "",                
                pinterest: "",
                notes: ""
            })
        } else {
            this.setState({
                error: error, // Display error in 'errorMsg' <p> element
            })
        }
    }

    render() {
        return (
            <div className="newContactContainer">
                <Jumbotron>
                    <h1 style={contactStyle.title}>New Contact</h1>
                    <form>
                        <h2 style={contactStyle.headers}>Personal</h2>
                        <div className="personalSection">
                            <div className="textInputs">
                                <div className="formField">
                                    <label htmlFor="firstName">First name: </label>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                        placeholder="John"
                                    />
                                </div>

                                <div className="formField">
                                    <label htmlFor="lastName">Last name: </label>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                        placeholder="Smith"
                                    />
                                </div>

                                <div className="formField">
                                    <label htmlFor="email">Email: </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        placeholder="john.smith@stem.com"
                                    />
                                </div>

                                <div className="formField">
                                    <label htmlFor="phoneNumber">Phone Number: </label>
                                    <Input
                                        type="tel"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        value={this.state.phoneNumber}
                                        onChange={this.handleChange}
                                        placeholder="4251239876"
                                    />
                                </div>

                                <div className="formField">
                                    <label htmlFor="birthday">Birthday: </label>
                                    <Input
                                        type="date"
                                        name="birthday"
                                        id="birthday"
                                        value={this.state.birthday}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="formField">
                                    <label htmlFor="contactPhoto">Contact Photo: </label>
                                    <Input
                                        type="text"
                                        name="contactPhoto"
                                        id="contactPhoto"
                                        value={this.state.contactPhoto}
                                        onChange={this.handleChange}
                                        placeholder="Image Url"
                                    />
                                </div>
                            </div>

                            <div className="formField">
                                <label htmlFor="notes">Notes: </label>
                                <TextArea
                                    name="notes"
                                    id="notes"
                                    onChange={this.handleChange}
                                >
                                    {this.state.notes}
                                </TextArea>
                            </div>
                        </div>
                        
                        <div className="socialsSection">
                            <h2 style={contactStyle.headers}>Socials</h2>

                            <div className="formField">
                                <label htmlFor="twitter">Twitter: </label>
                                <Input
                                    type="text"
                                    name="twitter"
                                    id="twitter"
                                    value={this.state.twitter}
                                    onChange={this.handleChange}
                                    placeholder="Twitter Handle"
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="tumblr">Tumblr: </label>
                                <Input
                                    type="text"
                                    name="tumblr"
                                    id="tumblr"
                                    value={this.state.tumblr}
                                    onChange={this.handleChange}
                                    placeholder="Tumblr Username"
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="pinterest">Pinterest: </label>
                                <Input
                                    type="text"
                                    name="pinterest"
                                    id="pinterest"
                                    value={this.state.pinterest}
                                    onChange={this.handleChange}
                                    placeholder="Pinterest Username"
                                />
                            </div>
                        </div>
                        <p className="errorMsg">{this.state.error}</p>
                        <button className="waves-effect waves-light btn-large red" onClick={this.handleSubmit}><span style={contactStyle.button}>New Contact</span></button>
                    </form>
                </Jumbotron>
            </div>
        )
    }
}

export default AddNewContact;