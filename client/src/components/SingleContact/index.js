import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import tumblr from "tumblr.js"

let singleStyle = {
    paddingTop: 10
}

class SingleContact extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: "davis122",
        blogUrl: ""
    }

    handleSwap = (event) => {
        this.props.swapView("All Contacts", null, null);
    }
    
    queryTumblr = () => {
        let userBlogName = this.state.name;
        var client = tumblr.createClient({ consumer_key: process.env.tumblrAuthConsumerKey });
        //this is querying the tumblr blog method, pulls back an object of basic info
        
        console.log(this.state);
    }

    componentDidMount() {
        this.queryTumblr();
        
    }


    render() {
        let { payload, socialType, swapView } = this.props;

        return (
            <div className="SingleContact">
                <h1>{payload.firstName}</h1>
                <p style={singleStyle}>{JSON.stringify(payload, null, 2)}</p>
                <p style={singleStyle}>Showing {socialType}</p>
                <a className="waves-effect waves-light btn-small red" onClick={this.handleSwap}>Back</a>
            </div>
        )
    }
}

export default SingleContact;