import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">SPA</h1>
          <ul className="header">
            <li><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li><NavLink className="nav-link" to="/products">Products</NavLink></li>
            <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
