import React from 'react'

const CoinItem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='symbol'>
            <image src={props.coins.image} alt='' />
            <p>{props.coins.symbol}</p>
        </div>
        <p>{props.coins.symbol}</p>
        <p>{props.coins.symbol}</p>
        <p className='hide-mobile'>{props.coins.symbol}</p>
        <p className='hide-mobile'>{props.coins.symbol}</p>
    </div>
  )
}

export default CoinItem