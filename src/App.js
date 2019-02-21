import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './component/post'
import PostForm from './component/postForm'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">          
            Welcome Sanjay
        </header>
        <PostForm />
        <hr></hr>
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
