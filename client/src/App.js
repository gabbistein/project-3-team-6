import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
<<<<<<< HEAD
import Detail from "./pages/Detail";
=======
import AddressBook from "./pages/AddressBook";
import NewContactForm from "./pages/NewContactForm"; 
>>>>>>> 0dcd5163aa77e7a2e5e2d88e924daa30dd7350b2
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Facebook from "./components/FacebookLogin/login";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
<<<<<<< HEAD
          <Route exact path="/books" component='' />
          <Route exact path="/books/:id" component={Detail} />
=======
          <Route exact path="/addressbook" component={AddressBook} />
          <Route exact path="/newcontact" component={NewContactForm} />
>>>>>>> 0dcd5163aa77e7a2e5e2d88e924daa30dd7350b2
          <Route component={NoMatch} />
        </Switch>
        <Facebook />
      </div>
    </Router>
  );
}

export default App;
