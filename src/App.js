import React, { Component } from 'react';
import{BrowserRouter, Route,Switch}from 'react-router-dom';




 import Home from './pages/home'
 import About from './pages/about'
 import Root from './pages/root'
 import Error from './pages/error'
 import Navigation from './pages/navigation'
 
 

import './App.css';

class App extends Component {
  render() {
    return (
      
        <BrowserRouter>


       <div>
       <Navigation/>

        
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/root" component={Root}/>
          <Route component={Error}/>
          </Switch>
       </div>

      </BrowserRouter>
      

    );
  }
}

export default App;
