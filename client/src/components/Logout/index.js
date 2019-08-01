import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

class Logout extends Component {
    state = {
        redirectTo: ""
    }

    logout = () => {
        Cookies.remove("access_token", { domain: "" });
        Cookies.remove("google_id", { domain: "" });
        this.setState({
            redirectTo: "/"
        })
    }

    render() {
        if (this.state.redirectTo) {
            return (
                <div>
                    <Redirect to={{ pathname: this.state.redirectTo }} />
                </div>
            )
        }

        return (
            <a onClick={this.logout}>Logout</a>
        );
    }
}

export default Logout;