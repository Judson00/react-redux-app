//Index for actions

import axios from 'axios';

export const fetchPrice = () => {
  return dispatchEvent => {
    axios
      .get(`https://api.cryptonator.com/api/ticker/btc-usd`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}