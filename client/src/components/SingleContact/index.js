import React, { Component } from "react";
import tumblr from "tumblr.js";
import API from "../../utils/API";
import Cookies from "js-cookie";
import dotenv from "dotenv"
import { log } from "util";
import axios from "axios";
dotenv.config()
// console.log(API_KEY);


class SingleContact extends Component {
    constructor(props) {
        super(props);

        this.state = { // This data is perhaps with props
            name: "pitchersandpoets",
            userName: "",
            url: "",
            userPosts: ""
        };
    }
    handleSwap = (event) => {
        this.props.swapView("All Contacts", null, null);
    }

    queryTumblr() {
        axios.get("/api/tumblr")
        .then(response => {
            console.log(response);
        })
    }

    

    componentDidMount() {
        console.log(`User id: ${Cookies.get("google_id")}`)
        console.log(`Contact id: ${this.props.payload.id}`)
        API.getUser(Cookies.get("google_id")).then(user => { /* TODO: get this working */
            let contacts = user.contacts

            console.log(`contacts: ${contacts}`)
        })

        this.queryTumblr();
    }

    render() {
        let { payload, socialType } = this.props;

        return (
            <div className="SingleContact">
                <h1>{`${payload.firstName} ${payload.lastName}`}</h1>
                <p>{JSON.stringify(payload)}</p>
                <p>Showing {socialType}</p>
                <div>
                    <ul>
                        {

                        }
                        {/* {console.log(this.state.userPosts)} */}
                    </ul>
                </div>
                <button onClick={this.handleSwap}>Back</button>
            </div>
        )
    }
}

export default SingleContact;