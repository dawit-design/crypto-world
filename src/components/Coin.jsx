// import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {api} from '../services/index'

function Coin(){
    const [currencies, setCurrencies] = useState('')
   

  useEffect(() => {
    const getCoins = async () => {
      const response = await axios.get(api)
      console.log(response.data[0])
      setCurrencies(response.data)
    }
    getCoins()
  },[])
    if(!currencies) return null
    
    return (
        <div className = "coin-list">
            {/* <h1>{coins[0].name} - {coins[0].symbol}</h1>
            <img src={coins[0].image}/> */}
            {currencies.map((currency) => (
                <div key={currency.id} className="coins"> 
                 <img src={currency.image}/>
                 <h2>{currency.name}</h2>
                 <h3>{currency.symbol}</h3>
                 <h3>$ {currency.current_price} </h3>
                 <h3>{currency.market_cap_change_percentage_24h.toFixed(2)} %</h3>
                </div>
            ))}
        </div>
    )
}
export default Coin;