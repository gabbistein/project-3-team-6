import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie"

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
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
        return (
            <a className="logout-btn" role="button" onClick={this.logout}>
                Logout
            </a>
        );
    }
}

export default Logout;