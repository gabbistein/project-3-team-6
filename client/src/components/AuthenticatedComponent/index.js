import React, { Component } from "react";
import Cookies from "js-cookie";
import API from "../../utils/API";

class AuthenticatedComponent extends Component {
    state = {
        user: undefined
    }

    componentDidMount() {

    }

    render() {

        if (this.state.user === undefined) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default AuthenticatedComponent;