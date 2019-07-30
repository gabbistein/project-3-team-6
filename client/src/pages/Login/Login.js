import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import API from "../../utils/API";
import Cookies from "js-cookie"

let loginJumbotron = {
    position: "absolute",
    borderRadius: 8,
    paddingTop: 100,
    paddingBottom: 100,
    marginBottom: 0,
    width: "65%",
    left: "50%",
    transform: "translate(-50%,18%)",
    title: {
        fontFamily: "Berkshire Swash, cursive",
        fontSize: 90,
        fontWeight: "bold"
    },
    subtitle: {
        fontStyle: "italic"
    }
}

class Login extends Component {
    state = {
        isLoggedIn: false,
        redirectTo: null
    }

    responseGoogle = (response) => {
        console.log(response);

        if (this.state.isLoggedIn) {
            alert("Already Logged In!")
        } else {
            this.setState({
                isLoggedIn: true
                // redirectTo: "/addressBook"
            })

            API.saveUser(
                {
                    firstName: response.profileObj.givenName,
                    lastName: response.profileObj.familyName,
                    googleId: response.googleId,
                    photos: [response.profileObj.imageUrl]
                }
            )

            Cookies.set("access_token", response.accessToken, { domain: "" })
            Cookies.set("google_id", response.googleId, { domain: "" })

            this.props.history.push("/addressBook");
        }
    }

    responseFailure = (req, res) => {
        alert("Failed to login")
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }

        return (
            <div>
                <div className="container text-center">
                    <div className="jumbotron" style={loginJumbotron}>
                        <h1 className="display-4" style={loginJumbotron.title}>Stem</h1>
                        <p className="lead" style={loginJumbotron.subtitle}>An app for easy stalking.</p>
                        <hr className="my-4" />

                        <br />

                        <GoogleLogin
                            clientId="218605059762-ct7g3dfv3n3tfkqp9h8fpatuu2is671v.apps.googleusercontent.com"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;