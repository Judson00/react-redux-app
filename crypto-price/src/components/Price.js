//Price Component

import React from 'react';
import { connect } from 'react-redux';

import { fetchPrice } from '../actions';
import Loader from 'react-loader-spinner';

const Price = props => {
  return (
    <div>
      <h1>Crypto Price</h1>
      {!props.price && props.isLoading && (
        <h2>Find the Price!</h2>
      )}
      {props.isLoading && (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      )}
      <button onClick={props.fetchPrice}>Get Price of BTC</button>
      {
        props.price 
          && 
        !props.loading 
          && 
        <div>
          <h2>{`1 ${props.price.ticker.base} = $ ${props.price.ticker.price}`}</h2>
        </div>
      }

    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return{
    isLoading: state.isLoading,
    price: state.price,
    error: state.error
  }
}

export default connect(
  mapStateToProps, 
  { fetchPrice }
)(Price);