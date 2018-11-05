import React, { Component , lazy ,Suspense} from 'react';
import logo from './logo.svg';
import gifImg from './img/giphy.gif';
import cls from './App.css';
import scssCls from './app.scss';
import './main.global.scss';
import Header from "./components/heder";
const LazyComonent = lazy(()=> import('./components/lazyComponent'));

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      lazy:false
    }
  }

  render() {
    return (
      <div className={cls.App}>
        <header className={cls["App-header"]}>
          <img src={logo} className={cls["App-logo"]} alt="logo" />
          <h1 className={scssCls["app-title"]}>Welcome to Reacts and webpack 4+ !!</h1>
        </header>
        
          <Header/>
        <div className={cls["App-intro"]}>
          <div>
              <img src={gifImg}/>
              <button onClick={_=>this.setState({lazy: true})}>Load more</button>
              {this.state.lazy &&
              <Suspense fallback={<span>Loading...</span>}>
                  <LazyComonent/>
              </Suspense>
                 }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
