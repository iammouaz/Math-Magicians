import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/header';
import Home from './components/Home';
import Quote from './components/Quote';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div id="App" className="App">
          <Header />
          <Switch>
            <Route path="/Calculator">
              <Calculator />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Quote">
              <Quote />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
