import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { GoogleLogout } from 'react-google-login';

let customStyle = {
    float: "right"
}

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

        this.setState({
            redirectTo: ""
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
            <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={this.logout}
                // render={renderProps => (
                //     <button onClick={renderProps.onClick} style={customStyle}>Logout</button>
                // )}
            />
        );
    }
}

export default Logout;