import DefaultLayout from "./components/layout/DefaultLayout";
import DashBoard from "./pages/dashboard/DashBoard";
import Login from "./pages/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <DefaultLayout>
              <DashBoard />
            </DefaultLayout>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
