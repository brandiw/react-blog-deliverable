import React, { Component } from 'react';
import Comment from './Comment.js';
import Author from './Author.js';
import '../App.css';

class Post extends Component {
  render() {
    let posts = this.props.posts || [];
    const myPosts = posts.map(p => {
      return <div key={p.title}>
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
        {myPosts}
        <em>Note, at this stage, we are only rendering ONE post with ONE comment!</em>
      </div>
    );
  }
}

export default Post;
