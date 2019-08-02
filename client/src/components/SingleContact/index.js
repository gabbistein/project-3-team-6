import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import tumblr from "tumblr.js"
import keys from "../../keys"

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
        var client = tumblr.createClient({ consumer_key: keys.tumblrAuthConsumerKey });
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
                <p>{JSON.stringify(payload)}</p>
                <p>Showing {socialType}</p>
                <button onClick={this.handleSwap}>Back</button>
            </div>
        )
    }
}

export default SingleContact;