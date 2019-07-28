import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import AddressBook from "./pages/AddressBook";
import NewContactForm from "./pages/NewContactForm"; 
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Facebook from "./components/FacebookLogin/login";
import Footer from "./components/Footer/footer"
import './App.css'
function App() {
  return (
    <Router>
      <div>
        <div className="main-content">
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/addressbook" component={AddressBook} />
          <Route exact path="/newcontact" component={NewContactForm} />
          <Route component={NoMatch} />
        </Switch>
        {/* <Facebook /> */}
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;