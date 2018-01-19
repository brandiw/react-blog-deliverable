import React, { Component } from 'react';
import Home from './Home.js';
import Post from './posts/Post.js';
import About from './About.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="Post">
        <header className="Post-header">
          <img src="../dino_logo.png" className="Post-logo" alt="logo" />
          <h1 className="Post-title">Dino Blog</h1>
          <p className="Post-intro">
            All the latest and greatest things from 65 million years ago.
          </p>
        </header>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>&nbsp;
              <Link to="/blog">Blog</Link>{' '}
              <Link to="/about">About</Link>{' '}
              <Link to="/movie">Movie</Link>{' '}
              <Link to="/food">Food</Link>{' '}
            </nav>
            <Route path="/blog" component={
                () => (<Post posts={this.props.posts} />
            )}/>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
        <hr />
        <nav id="footer">
          <a href="/">Home</a>
          <a href="/main">Main Blog</a>
          <a href="/about">About</a>
          <a href="/movie">Favorite Movie</a>
          <a href="/food">Favorite Food</a>
        </nav>
      </div>
    );
  }
}

export default App;
