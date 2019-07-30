import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SocialSquares from './components/SocialSquares/SocialSquares';

function App() {
  return (
    <div className="App">
      <Header/>
      <SocialSquares/>
      <a className="credit" href="mailto:roei635@gmail.com">Made by Roei, press for contact</a>
    </div>
  );
}

export default App;
