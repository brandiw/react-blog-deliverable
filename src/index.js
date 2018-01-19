import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var posts = [{
  title: 'Dinos rule!',
  content: 'Wow. We are so neat',
  authors: ['T-Rex; King of Dinos', 'Baby T-Rex', 'Mama T-Rex'],
  comments: ['Eh, dinos are okay', 'Yeah, go dinos']
}, {
  title: 'So offended',
  content: 'I am from way, way longer ago than these young whipper-snapper dinos. Jurassic rules, cretaceous sucks!',
  authors: ['Stegasaurus'],
  comments: ['Cool it', 'Who cares, bro', 'Triassic or nothing!']
}];

ReactDOM.render(<App posts={posts} />, document.getElementById('root'));
registerServiceWorker();

