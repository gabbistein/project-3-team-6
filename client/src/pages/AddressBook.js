
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";

class AddressBook extends Component {
    state = {
        loggedIn: true,
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

    // ----- TO DO: -----

    // Add contact deletion here
    // Users social media login?

    // ----- JSX Address Book page ----
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron className="jumbotron-fluid">
                            <h1>Your Contacts</h1>
                            <Link to="/newContact">+ New Contact</Link>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3">
                        <div className="text-center">Filters:</div>
                        <div className="filtersContainer text-center">
                            <div className="form-check">
                                {/* <input className="form-check-input" type="checkbox" value={this.state} onChange={this.state} id="defaultCheck1"> */}
                                    <label className="form-check-label" for="defaultCheck1">All</label>
                                {/* </input> */}
                            </div>
                        </div>
                    </Col>
                    <Col size="md-9">
                        <div className="pre-scrollable text-center">
                            Your Contacts Go Here!<br></br><br></br>
                            Your Contacts Go Here!<br></br><br></br>
                            Your Contacts Go Here!<br></br><br></br>
                            Your Contacts Go Here!<br></br><br></br>
                            Your Contacts Go Here!<br></br><br></br>
                            Your Contacts Go Here!<br></br><br></br>
                            Your Contacts Go Here!<br></br><br></br>
                            Your Contacts Go Here!<br></br><br></br>
                            Your Contacts Go Here!<br></br><br></br>
                            Your Contacts Go Here!<br></br><br></br>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AddressBook;
