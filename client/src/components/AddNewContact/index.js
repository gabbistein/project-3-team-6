import React, { Component } from 'react';
import { Input, TextArea, FormBtn } from '../Form';
import validator from 'validator';
import Jumbotron from '../Jumbotron';
import API from "../../utils/API";
import Cookies from "js-cookie";
import './style.css';

class AddNewContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthday: "",
            phoneNumber: "",
            facebook: "",
            instagram: "",
            twitter: "",
            linkedIn: "",
            notes: "",
            error: "",
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
            "phoneNumber",
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
                notes: this.state.notes,
                socialMedia: {
                    facebook: { link: this.state.facebook },
                    instagram: { link: this.state.instagram },
                    twitter: { link: this.state.twitter },
                    linkedIn: { link: this.state.linkedIn }
                }
            }

            // TODO: Submission code. Fix the client side api request. parameters may be messed up.
            console.log(JSON.stringify(newContact))
            API.addContact(`/${Cookies.get("google_id")}`, newContact)

            this.setState({
                error: "", // Clear error message
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
                    <h1>New Contact</h1>
                    <form>
                        <h2>Personal</h2>
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
                                    />
                                </div>

                                <div className="formField">
                                    <label htmlFor="lastName">Last name: </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
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
                            <h2>Socials</h2>
                            <div className="formField">
                                <label htmlFor="facebook">Facebook: </label>
                                <Input
                                    type="text"
                                    name="facebook"
                                    id="facebook"
                                    value={this.state.facebook}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="instagram">Instagram: </label>
                                <Input
                                    type="text"
                                    name="instagram"
                                    id="instagram"
                                    value={this.state.instagram}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="twitter">Twitter: </label>
                                <Input
                                    type="text"
                                    name="twitter"
                                    id="twitter"
                                    value={this.state.twitter}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="linkedIn">LinkedIn: </label>
                                <Input
                                    type="text"
                                    name="linkedIn"
                                    id="linkedIn"
                                    value={this.state.linkedIn}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <p className="errorMsg">{this.state.error}</p>
                        <button onClick={this.handleSubmit}>Add Contact</button>
                    </form>
                </Jumbotron>
            </div>
        )
    }
}

export default AddNewContact;