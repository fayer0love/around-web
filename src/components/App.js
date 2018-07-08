import React, { Component } from 'react';
import { Header } from './Header';
import  { Main } from './Main'
import '../styles/App.css';
import '../styles/Header.css'
import {TOKEN_KEY} from '../constants'

class App extends Component {
  state = {
    isLoggedIn : !!localStorage.getItem(TOKEN_KEY),
  }

  handleSuccessLogin = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    this.setState({ isLoggedIn: true });
  }

  handleSuccessLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} handleSuccessLogout={this.handleSuccessLogout}/>
        <Main isLoggedIn={this.state.isLoggedIn} handleSuccessLogin={this.handleSuccessLogin}/>
      </div>
    );
  }
}

export default App;
