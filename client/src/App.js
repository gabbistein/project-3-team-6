import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import AddressBook from "./pages/AddressBook";
import NewContactForm from "./pages/NewContactForm";
import ContactDetail from "./pages/ContactDetail";
import NoMatch from "./pages/NoMatch";
// import Facebook from "./components/FacebookLogin/login";
import Footer from "./components/Footer/footer"
import Cookies from "js-cookie"
import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    if (Cookies.get("google_id")) {
      this.setState({ isLoggedIn: true })
    } else {
      this.setState({isLoggedIn: false})
    }
  }

  render() {
    return (
      <Router>
        <div className="backgroundImg">
          <div className="Site">
            <div className="Site-content">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/addressbook" component={AddressBook} />
                <Route exact path="/newcontact" component={NewContactForm} />
                <Route exact path="/contactdetail" component={ContactDetail} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;