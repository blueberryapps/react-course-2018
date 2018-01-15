import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

const App = props =>
  (
    <div>
      <h1>App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>

      <Switch >
        <Route exact path='/' component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/inbox" component={Inbox} />
      </Switch>
    </div>
  );

const Home = () => {
  return (
    <div>
      Home
    </div>
  );
};

const About = () => (
  <div>
    About
  </div>
);

const Inbox = () => (
  <div>
    Inbox
  </div>
);

export default () => (
  <HashRouter>
    <App/>
  </HashRouter>
);
