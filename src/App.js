import react, { useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import firebase from "firebase";
import "firebase/auth";
import "./App.css";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import SignUP from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { userContext } from "./Context/UserContext";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <userContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/signup" component={SignUP}></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
      </userContext.Provider>
    </Router>
  );
}

export default App;
