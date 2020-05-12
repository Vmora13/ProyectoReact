import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistroPacientes from './RegistroPacientes'

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            
            <li>
              <Link to="/registroPacientes">RegistroPacientes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
   

          <Route path="/registroPacientes">
            <RegistroPacientes />
          </Route>



          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Switch>
        </div>
  </Router>
  );
}

export default App;
