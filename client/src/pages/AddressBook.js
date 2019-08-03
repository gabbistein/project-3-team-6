import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import Contact from "../components/Contact";
import SingleContact from "../components/SingleContact";
import Nav from "../components/Nav";
import AddressBookJumbo from "../components/AddressBookJumbo"

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

var fakeUsers=[];
function fakeUser(id) {
    return{
        id:id,
        firstName: "Vish",
        lastName: "Diwan",
        email: "vishdiwan@gmail.com",
        birthday: "1991-11-29",
        phoneNumber: "253-334-5715",
        facebook: "https://www.facebook.com/vishdiwan",
        instagram: "https://www.instagram.com/vishdiwan",
        twitter: "https://www.twitter.com/vishdiwan",
        linkedIn: "https://www.linkedin.com/vishdiwan",
        notes: "Real cool guy, favorite contact",
    }
}
for (let i = 0; i < 4; i++) {
    fakeUsers.push(fakeUser(i))
}
class AddressBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            contacts: fakeUsers, //TODO: will need to pull from API
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
        console.log("address book mounted", this.state.contacts);
        // this.loadContacts();
    };

    deleteContact = (id) => { //TODO need to delete from database
        let {contacts} = this.state;
        contacts.splice(id,1);
        this.setState ({
            contacts, 
        })
    }

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
                // return console.log(this.state.viewId);
                return this.oneView(this.state.viewId);
                break;
            default:
                return <h1>Error: Attempted state mode - {this.state.mode}</h1>
        }

    }

    allView = () => { // builds list of all contacts
        let { contacts } = this.state;

        let list = [];

        for (let contact of contacts) {
            list.push(<Contact key={contact.id} payload={contact} swapView={this.swapView} deleteContact={this.deleteContact}/>);
        }

        return list;
    }

    oneView = (userid) => { // Renders a single contact view
        console.log("One View", userid)
        let { contacts, socialType } = this.state;
        
        let thisContact = contacts.find(contact => contact.id === userid);

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

    addContact = () => this.props.history.push("/newContact")

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
                                    <a className="waves-effect waves-light btn-small red" onClick={this.addContact}><span style={addressStyle.button}>New Contact</span></a>
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
