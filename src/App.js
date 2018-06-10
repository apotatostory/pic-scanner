import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './js/Page/Home'
import Chat from './js/Page/Chat'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav-wrapper">
            <Link className="brand-logo right" to="/">Tim's Blog</Link>
            <ul id="nav-mobile" className="left">
              <li>
                <Link to="/1">Chat</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home}/>
          <Route path="/1" component={Chat}/>
        </div>
      </Router>
    );
  }
}

export default App;
