import React from 'react';
import './App.css';
import LeftTime from './components/left-time/LeftTime';
import ReactSpringAnimation from './components/react-spring-animation/ReactSpringAnimation.jsx';
import Home from './components/home-page/Home.jsx';
import ReactNotifications from 'react-notifications-component';
import { useSpring, animated } from 'react-spring';

function App() {
  return (
    <div className="App">
      {/* <LeftTime /> */}
      <ReactNotifications />
      <ReactSpringAnimation />
      <Home />
    </div>
  );
}

export default App;
