import DefaultLayout from "./components/layout/DefaultLayout";
import DashBoard from "./pages/dashboard/DashBoard";
import Login from "./pages/login/Login";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PasswordReset from "./pages/password.reset/PasswordReset";

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

          <Route path="/reset-password">
            <PasswordReset />
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
