import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import Contact from "../components/Contact";
import SingleContact from "../components/SingleContact";
import Nav from "../components/Nav";
import AddressBookJumbo from "../components/AddressBookJumbo";

let addressStyle = {
    button: {
        color: "white"
    },
    title: {
        fontFamily: "Berkshire Swash, cursive",
        fontSize: 40,
        fontWeight: "bold",
        paddingLeft: 15
    }
}

class AddressBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            contacts: [ // some fake data. DELETE when real data comes in.
                { id: "764838", name: "Tester 1" },
                { id: "7asfds38", name: "Tester 2" },
                { id: "43938", name: "Tester 3" },
                { id: "4393r8", name: "Tester 4" },
                { id: "439qq38", name: "Tester 5" },
                { id: "439asd38", name: "Tester 6" },
            ],
            filteredContacts: [], // Once filtering is decided.
            mode: "All Contacts", // or "One Contact",
            viewId: null,
            socialType: null,
            flags: { // Edit this to add new filters, or load from user data
                "All": true,
                "Work": true,
                "Family": true,
                "Friends": true,
                "People to Avoid": true,
                "Professors": true,
            },
        };

    }

    componentWillMount() {
    }

    componentDidMount() {
        // this.loadContacts();
    };

    // loadContacts = () => {
    //     API.getContacts()
    //         .then(res =>
    //             this.setState({})
    //         )
    //         .catch(err => console.log(err));
    // };

    filterChange = (event) => { // When a checkbox in the filter is checked, it updates in state
        console.log('Filter Change', event.target.id, event.target.checked);
        let { flags } = this.state; // get current state of the filter
        let { id, checked } = event.target; // get filter element id and current checked status

        if (id === "All") { // Clicking ALL sets all checks to the same
            for (let key of Object.keys(flags)) {
                flags[key] = checked;
            }
        } else { // Otherwise switch the state
            flags["All"] = false;
            flags[id] = checked;
        }

        this.setState({
            flags
        })
    }

    buildFilter = () => { // builds the list of filterable attributes
        let { flags } = this.state;
        let filterElements = [];

        for (let key of Object.keys(flags)) {
            filterElements.push(
                <div key={`${key}+${Date.now()}`} className="form-check">
                    <label>
                        <input type="checkbox" name="filter" id={key} checked={flags[key]} onChange={this.filterChange} /> <span className="label-text">{key}</span>
                    </label>
                </div>
            )
        }

        return filterElements;
    }

    renderContactView = () => { // switches view of contact components or single contact view
        let { viewId } = this.state;

        switch (this.state.mode) {
            case "All Contacts":
                return this.allView();
                break;
            case "One Contact":
                return this.oneView(viewId);
                break;
            default:
                return <h1>Error: Attempted state mode - {this.state.mode}</h1>
        }

    }

    allView = () => { // builds list of all contacts
        let { contacts } = this.state;

        let list = [];

        for (let contact of contacts) {
            list.push(<Contact key={contact.id} payload={contact} swapView={this.swapView} />);
        }

        return list;
    }

    oneView = (userid) => { // Renders a single contact view
        console.log("One View", userid)
        let { contacts, socialType } = this.state;
        console.log(contacts);
        let thisContact = contacts.find((contact) => {
            return contact.id === userid;
        })

        return <SingleContact payload={thisContact} socialType={socialType} swapView={this.swapView} />
    }

    swapView = (mode, viewId, socialType) => { // Action to swap view state
        console.log("Swapp!")
        this.setState({
            mode,
            viewId,
            socialType
        })
    }

    // ----- TO DO: -----

    // Add contact deletion here
    // Users social media login?

    // ----- JSX Address Book page ----
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <AddressBookJumbo>
                        <Row >
                            <h1 style={addressStyle.title}>Your Address Book</h1>
                        </Row>
                        <Row>
                            <Col size="sm-12 md-2">
                                <div className="text-center">
                                    <a className="waves-effect waves-light btn-small red"><span style={addressStyle.button}>New Contact</span></a>
                                </div>
                                <br></br>
                                <form className="filtersContainer">
                                    <div className="text-center">Filters:</div>
                                    {this.buildFilter()}
                                </form>
                            </Col>
                            <Col size="sm-12 md-10">
                                <div className="pre-scrollable">
                                    {this.renderContactView()}
                                </div>
                            </Col>
                        </Row>
                    </AddressBookJumbo>
                </div>
            </div>
        );
    }
}

export default AddressBook;
