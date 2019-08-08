import React, { Component } from "react";
import dotenv from "dotenv";
import moment from "moment";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
dotenv.config();

let singleStyle = {
    paddingTop: 10,
    imageFormat: {
        borderRadius: 5,
        width: 128,
        height: 128,
        marginBottom: 10
    }
}

class SingleContact extends Component {
    constructor(props) {
        super(props);

        this.state = { // This data is perhaps with props
            name: "smbc-comics",
            userName: "",
            url: "",
            userPosts: ""
        };
    }

    handleSwap = (event) => {
        this.props.swapView("All Contacts", null, null);
    }

    render() {
        let { payload, socialType } = this.props;
        console.log(payload)

        if (!socialType) {
            return (
                <div className="SingleContact">
                    <h1>{`${payload.firstName} ${payload.lastName}`}</h1>
                    {payload.photos.length < 1 ?
                        <img src="https://via.placeholder.com/128" alt="Contact" style={singleStyle.imageFormat}></img> :
                        <img src={payload.photos[0]} alt="Contact" style={singleStyle.imageFormat}></img> 
                    }
                    <p>Email: {payload.email}</p>
                    <p>Phone: {parsePhoneNumberFromString("+1" + payload.phoneNumber).formatNational()}</p>
                    <p>Birthdate: {moment(payload.birthdate).format("MMM Do, YYYY")}</p>
                    <p>Notes: {payload.notes ? payload.notes : "No notes!"}</p>
                    <button onClick={this.handleSwap}>Back</button>
                </div>
            )
        } else {
            return (
                <div className="SingleContact">
                    <h1>{`${payload.firstName} ${payload.lastName}'s ${socialType}`}</h1>

                    <h3>Feature Coming Soon!</h3>

                    <div>
                        <ul>
                            {
                                Object.keys(this.state.userPosts).map((key, i) => (
                                    <p key={i}>Hello, {this.state.userPosts.image_permalink}!</p>
                                    //this is only populating the "hello", i need a second set of eyes to find out why image_permalink isn't bringing back a value
                                ))
                            }
                        </ul>
                    </div>

                    <button onClick={this.handleSwap}>Back</button>
                </div>
            )
        }
    }
}

export default SingleContact;