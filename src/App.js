import React from 'react';
import './App.css';
import LeftTime from './components/left-time/LeftTime';
import ReactSpringAnimation from './components/react-spring-animation/ReactSpringAnimation.jsx';
import { useSpring, animated } from 'react-spring';

function App() {
  return (
    <div className="App">
      {/* <LeftTime /> */}
      <ReactSpringAnimation />
    </div>
  );
}

export default App;
