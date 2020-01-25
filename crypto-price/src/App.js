import React from 'react';
import './App.css';
import Price from './components/Price';
import NewCoin from './components/Input';

function App() {
  return (
    <div className="App">
      <Price Crypto />
      <NewCoin />
    </div>
  );
}

export default App;
