import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { GoogleLogout } from 'react-google-login';

let buttonStyle = {

}

class Logout extends Component {
    state = {
        redirectTo: ""
    }

    // componentDidUpdate(prevProps){

    //     if(this.props.)
    //     this.setState({
    //         redirectTo: ""
    //     })
    // }

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
            <a onClick={this.logout} className="waves-effect waves-light btn-large red" style={buttonStyle}>Logout</a>
        );
    }
}

export default Logout;