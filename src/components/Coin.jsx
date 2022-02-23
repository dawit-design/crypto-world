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
            
                <Table  striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Marekt Cap</th>
                        </tr>
                    </thead>
                    <tbody style={{align: 'center', }}>
                            {currencies.map((currency) => (
                                <tr key={currency.id}>
                                <td><img src={currency.image} style={{width: 25, height: 25, marginRight: 10}}/>  {currency.name} - {currency.symbol}</td>
                                <td>$ {currency.current_price}</td>
                                <td > <span className={currency.market_cap_change_percentage_24h > 0 ?( 'text-success'): 'text-danger' }> {currency.market_cap_change_percentage_24h} % </span></td>
                                <td>$ {currency.market_cap_change_24h}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
        </div>
    )
}
export default Coin;