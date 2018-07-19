import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './js/Page/Home'
import Chat from './js/Page/Chat/Chat'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/chat',
        component: Chat,
    }];

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="nav-wrapper">
                        <Link className="brand-logo right" to="/">Tim's Blog</Link>
                        <ul id="nav-mobile" className="left">
                            <li>
                                <Link to="/chat">Chat</Link>
                            </li>
                        </ul>
                    </nav>
                    {routes.map((data, index) =>
                        <Route
                            key={index}
                            ref={data.path}
                            exact path={data.path}
                            component={(props) =>
                                <data.component {...props} />
                            }
                        />
                    )}
                </div>
            </Router>
        );
    }
}

export default App;
