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
            // <GoogleLogout
            //     buttonText="Logout"
            //     onLogoutSuccess={this.logout}
            // // render={renderProps => (
            // //     <button onClick={renderProps.onClick} >Logout</button>
            // // )}
            // />
            <button onClick={this.logout} className="waves-effect waves-light btn-large red">Logout</button>
        );
    }
}

export default Logout;