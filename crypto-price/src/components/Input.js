import React, { useState } from 'react';
import axios from 'axios';

const NewCoin = () => {

  const [coin, setCoin] = useState({
    coinText: "",
    price: null
  })

  const handleChanges = e => {
    //console.log("handleChanges: " + e.target.value)
    setCoin({...coin, coinText: e.target.value})
  }

  const fetchPrice = e => {
    e.preventDefault()
    axios
      .get(`https://api.cryptonator.com/api/ticker/${coin.coinText}-usd`)
      .then(res => {
        console.log("fetchPrice result: " + JSON.stringify(res))
        setCoin({...coin, price: res.data.ticker.price})
      })
      .catch(err => console.log(err))
  }

  return(
    <div>
      <input
        type="text"
        value={coin.coinText}
        placeholder="Enter Ticker Symbol"
        onChange={handleChanges}
      />
    <button onClick={fetchPrice}>Get Price</button>
  <h2>{coin.coinText}</h2>
  <h2>{coin.price}</h2>
    </div>
  )
}

export default NewCoin;