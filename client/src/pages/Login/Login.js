import React, { Component } from "react";
import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'
import GoogleLogin from 'react-google-login';
import API from "../../utils/API";

class Login extends Component {
    state = {
        isLoggedIn: false,
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        googleId: "",
        photos: [],
        accessToken: ""
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        // this.props._login(this.state.username, this.state.password)
        // this.setState({
        //     redirectTo: '/'
        // })
    }

    responseGoogle = (response) => {
        console.log(response);

        if (this.state.isLoggedIn) {
            console.log("Already Logged In!")
        } else {
            this.setState({
                isLoggedIn: true,
                firstName: response.profileObj.givenName,
                lastName: response.profileObj.familyName,
                googleId: response.googleId,
                photos: [response.profileObj.imageUrl],
                accessToken: response.accessToken
            })

            let newUser = {
               firstName: this.state.firstName,
               lastName: this.state.lastName,
               googleId: this.state.googleId,
               photos: this.state.photos 
            }

            API.saveUser(newUser) 
        }
    }

    responseFailure = (req, res) => {
        console.log("Failed to login")
    }

    render() {
        return (
            <div>
                <div className="container text-center">
                    <div className="jumbotron">
                        <h1 className="display-4">Stem</h1>
                        <p className="lead">An app for easy stalking</p>
                        <hr className="my-4" />
                        <div className="LoginForm">
                            <h1>Login form</h1>
                            <form>
                                <label htmlFor="username">Username: </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="password">Password: </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <button onClick={this.handleSubmit}>Login</button>
                            </form>

                            <br />

                            <GoogleLogin
                                clientId="218605059762-ct7g3dfv3n3tfkqp9h8fpatuu2is671v.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseFailure}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;