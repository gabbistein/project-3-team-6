import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";

class SingleContact extends Component {
    constructor(props) {
        super(props);

    }

    handleSwap = (event) => {
        this.props.swapView("All Contacts", null, null);
    }

    render() {
        let { payload, socialType, swapView } = this.props;

        return (
            <div className="SingleContact">
                <h1>{payload.name}</h1>
                <p>{JSON.stringify(payload)}</p>
                <p>Showing {socialType}</p>
                <button onClick={this.handleSwap}>Back</button>
            </div>
        )
    }
}

export default SingleContact;