import React, { Component , lazy ,Suspense , useState} from 'react';
import logo from './logo.svg';
import gifImg from './img/giphy.gif';
import cls from './App.css';
import scssCls from './app.scss';
import './main.global.scss';
import Header from "./components/heder";
const LazyComponent = lazy(()=> import('./components/lazyComponent'));
 
// const RestaurantListComponent = lazy(() => import('./RestaurantList'));

const Counter = ()=>{
  const [count, setCount] = useState(0) 

  return (
    <>
      <button onClick={_=> setCount(count + 1)}>Click to + </button>
        {count}
      <button onClick={_=> setCount(count - 1)}>Click to - </button>
    </>
  )
}

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
          <h1 className={scssCls["app-title"]}>Welcome to Reacts 16.9 and webpack 4+ !! </h1>
        </header>
        
          <Header/>
        <div className={cls["App-intro"]}>
          <div>
              <img src={gifImg} style={{width: '15vw'}}/>
              <div>
                <p>with react hook</p>
                <Counter/>
              </div>
              <div>
                <p>with lazy loading...</p>
                <button onClick={_=>this.setState({lazy: true})}>Load more</button>
                {this.state.lazy &&
                <Suspense fallback={<span>Loading...</span>}>
                    <LazyComponent/>
                </Suspense>
                  }
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
