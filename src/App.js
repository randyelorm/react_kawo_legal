import HomePage from "./Components/HOMEPAGE/HomePage";
import StartUps from "./Components/STARTUPS/StartUps";
import Register from "./Components/REGISTER/Rejister"
import Login from "./Components/LOGIN/Login"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <Router >
      <Switch>
          <Route exact path = "/">
              <HomePage/>
          </Route>

          <Route path = "/startups">
              <StartUps/>
          </Route>


          <Route path = "/register">
              <Register/>
          </Route>

          <Route path = "/login">
              <Login/>
          </Route>
      </Switch>
   
    </Router>
  );
}

export default App;
