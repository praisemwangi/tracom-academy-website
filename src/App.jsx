
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

const Home = () => (
  <div>
    <h2>Welcome to Tracom Academy</h2>
    <p>Please select an option to either register or login.</p>
  </div>
);

export default App;
