import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";

class AddressBook extends Component {
    state = {
        loggedIn: "",
        contacts: []
    };

    // componentDidMount() {
    //     this.loadContacts();
    // };

    // loadContacts = () => {
    //     API.getContacts()
    //         .then(res =>
    //             this.setState({})
    //         )
    //         .catch(err => console.log(err));
    // };

    // TO DO: Add contact deletion here
    // TO DO: Users social media login?

    // ----- JSX Address Book page ----
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Your Contacts</h1>
                            <Link to="/newContact">+ New Contact</Link>
                        </Jumbotron>
                    </Col>
                    <Col size="md-6">


                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">


                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AddressBook;
