import React, {useState} from 'react'
import CoinItem from './CoinItem'
import './Coins.css'

const Coins = (props) => {
  return (
    <div className='container'>
        <h2 className='title'>Top <span>10 Coins</span> in Market</h2>
        <div className='heading'>
            <p>Rank</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Mkt Cap</p>
        </div>
        {props.coins.map(coins => {
            return (
                <CoinItem coins={coins} key={coins.id} />
            )
        })}
    </div>
  )
}

export default Coins