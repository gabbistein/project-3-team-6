import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import AddressBook from "./pages/AddressBook";
import NewContactForm from "./pages/NewContactForm"; 
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Facebook from "./components/FacebookLogin/login";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/addressbook" component={AddressBook} />
          <Route exact path="/newcontact" component={NewContactForm} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
