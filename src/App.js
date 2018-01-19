import React, { Component } from 'react';
import Comment from './Comment.js';
import Author from './Author.js';
import './App.css';

class Post extends Component {
  render() {
    const myPosts = this.props.posts.map(p => {
      return <div={p.title}>
              <h1 className="Title">{p.title}</h1>
              <Author authors={p.authors} />
              <p className="Post-intro">
                {p.content}
              </p>
              <h2>Comments</h2>
              <Comment comments={p.comments} />
              <hr />
            </div>
    });

    return (
      <div className="Post">
        <header className="Post-header">
          <img src="../dino_logo.png" className="Post-logo" alt="logo" />
          <h1 className="Post-title">Dino Blog</h1>
          <p className="Post-intro">
            All the latest and greatest things from 65 million years ago.
          </p>
        </header>
        {myPosts}
        <em>Note, at this stage, we are only rendering ONE post with ONE comment!</em>
      </div>
    );
  }
}

export default Post;
