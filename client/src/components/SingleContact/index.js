import React, { Component } from "react";
import API from "../../utils/API";
import Cookies from "js-cookie";
import dotenv from "dotenv";
dotenv.config()

let singleStyle = {
    paddingTop: 10
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
                    <img src={payload.photos[0]}></img>
                    <p>Email: {payload.email}</p>
                <button onClick={this.handleSwap}>Back</button>
                </div>
            )
        } else {
            return (
                <div className="SingleContact">
                    <h1>{`${payload.firstName} ${payload.lastName}`}</h1>
                    <p>{JSON.stringify(payload)}</p>
                    <p>Showing {socialType}</p>
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
                    }
            <button onClick={this.handleSwap}>Back</button>
                </div>
            )
        }

    }
}

export default SingleContact;