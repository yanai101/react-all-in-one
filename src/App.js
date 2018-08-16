import React, { Component } from 'react';
import logo from './logo.svg';
import gifImg from './img/giphy.gif';
import cls from './App.css';
import scssCls from './app.scss';
import './main.global.scss';
import Header from "./components/heder";

class App extends Component {
  render() {
    return (
      <div className={cls.App}>
        <header className={cls["App-header"]}>
          <img src={logo} className={cls["App-logo"]} alt="logo" />
          <h1 className={scssCls["app-title"]}>Welcome to Reacts and webpack 4+ !!</h1>
        </header>
        
          <Header onClick={_=>conmsole.log('ss')}/>
        <div className={cls["App-intro"]}>
          <div>
              <img src={gifImg}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
