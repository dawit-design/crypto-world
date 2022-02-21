// import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {api} from '../services/index'

function Coin(){
    const [coins, setCoins] = useState('')
   

  useEffect(() => {
    const getCoins = async () => {
      const response = await axios.get(api)
      console.log(response.data[0])
      setCoins(response.data)
    }
    getCoins()
  },[])
    if(!coins) return null
    
    return (
        <div className = "coin-list">
            <h1>{coins[0].name} - {coins[0].symbol}</h1>
            <h1>$ {coins[0].current_price} </h1>
            <h3>{coins[0].market_cap_change_24h} - % {coins[0].market_cap_change_percentage_24h}</h3>
            <img src={coins[0].image}/>
        </div>
    )
}
export default Coin;