import React, { Component } from "react";
import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'

class Login extends Component {
    state = {
        username: "",
        password: ""
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
        this.props._login(this.state.username, this.state.password)
        this.setState({
            redirectTo: '/'
        })
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
                            <a href="/auth/google">
                                <img src={googleButton} alt="sign into Google Button" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;