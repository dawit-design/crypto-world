// import {Link} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table} from 'react-bootstrap';
import {api} from '../services/index'

function Coin(){
    const [currencies, setCurrencies] = useState([])
   
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
            {currencies.map((currency) => (
                <div key={currency.id} className="coins"> 
                 {/* <img src={currency.image}/>
                 <h2>{currency.name}</h2>
                 <h3>{currency.symbol}</h3>
                 
                  */}
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Marekt Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td> <h2> <img src={currency.image}/>  {currency.name} - {currency.symbol}</h2> </td>
                        <td><h3>$ {currency.current_price} </h3></td>
                        <td><h3>$ {currency.market_cap_change_24h} </h3></td>
                        <td><h3>{currency.market_cap_change_percentage_24h.toFixed(2)} %</h3></td>
                        </tr>
                    </tbody>
        </Table>
                </div>
            ))}
        </div>
    )
}
export default Coin;