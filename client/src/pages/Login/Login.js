import React, { Component } from "react";
import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'
<<<<<<< HEAD
import GoogleLogin from 'react-google-login';
=======
>>>>>>> d24281720d51dfee6744f1e4399fd4b87bf269a4

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
<<<<<<< HEAD
            [name]: value
        });
    };
=======
          [name]: value
        });
      };
>>>>>>> d24281720d51dfee6744f1e4399fd4b87bf269a4

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        this.props._login(this.state.username, this.state.password)
        this.setState({
            redirectTo: '/'
        })
    }

<<<<<<< HEAD
    responseGoogle = (response) => {
        console.log(response);
    }

=======
>>>>>>> d24281720d51dfee6744f1e4399fd4b87bf269a4
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

                            <hr />

                            <GoogleLogin
                                clientId="218605059762-ct7g3dfv3n3tfkqp9h8fpatuu2is671v.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
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