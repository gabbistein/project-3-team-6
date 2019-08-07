import React, { Component } from "react";
import tumblr from "tumblr.js";
import API from "../../utils/API";
import Cookies from "js-cookie";
import dotenv from "dotenv"
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

    queryTumblr() {
        let userBlogName = this.state.name;
        var consumerKey = process.env.REACT_APP_API_KEY;
        var consumerSecret = process.env.REACT_APP_API_KEY;
        var token = process.env.REACT_APP_TOKEN;
        var tokenSecret = process.env.REACT_APP_TOKEN_SECRET;
        var client = tumblr.createClient({ 
            consumer_key: consumerKey,
            consumer_secret: consumerSecret,
            token: token,
            tokenSecret: tokenSecret
        });

        // //this is querying the tumblr blog method, pulls back an object of basic info
        // client.blogPosts(`${userBlogName}`, (err, response) => {
        //     this.setState({ 
        //         userPosts: response.posts,
        //     })
        // })
    }

    componentDidMount() {
        console.log(`User id: ${Cookies.get("google_id")}`)
        console.log(`Contact id: ${this.props.payload._id}`)
        API.getUser(Cookies.get("google_id")).then(user => { /* TODO: currently only grabs first person on contact list */
            let contacts = user.data.contacts

            console.log("Contacts: ")
            console.log(contacts)
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

export default SingleContact;