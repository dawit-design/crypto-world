// import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {api} from '../services/index'

function Coin(){
    const [coins, setCoins] = useState('')
   

  useEffect(() => {
    const getCoins = async () => {
      const response = await axios.get(api)
      setCoins(response.data)
    }
    getCoins()
  },[])
    if(!coins) return null
    
    return (
        <div className = "coin-list">
            {/* <h1>{coins[0].name} - {coins[0].symbol}</h1>
            <img src={coins[0].image}/> */}
            {coins.map((coin) => (
                <div key={coin.id} className="coins"> 
                 <h2>{coin.name}</h2>
                 <img src={coin.image}/>
                 <h3>$ {coins[0].current_price} </h3>
                 <h3>{coins[0].market_cap_change_percentage_24h.toFixed(2)} %</h3>
                </div>
            ))}
        </div>
    )
}
export default Coin;