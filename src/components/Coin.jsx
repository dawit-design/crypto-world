// import {Link} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table} from 'react-bootstrap';
import {api} from '../services/index'

function Coin(){
    const [currencies, setCurrencies] = useState([])
   const [search, setSearch] = useState("")
   const [filterCurrency, setFilterCurrency] = useState([])
  useEffect(() => {
      const getCoins = async () => {
      const response = await axios.get(api)
      console.log(response.data[0])
      setCurrencies(response.data)
      if(response.data) {
          setFilterCurrency(
          response.data.filter((currency) => {
            // console.log("shoot me now");
            return currency.name?.toLowerCase().includes(search.toLocaleLowerCase());
          })
        );
      }
    }
    getCoins()
  },[search])

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat(
        'en-US',
        {
            style: 'currency',
            currency: 'usd',
            maximumSignificantDigits
        })
        .format(number)
    if(!currencies) return null
    
    return (
        <div className = "coin-list">
        <input 
        placeholder="Search Crypto" 
        onChange={e => setSearch(e.target.value)} 
        style={{
            textAlign: 'left',
            borderColor: 'black',
            fontSize: 18,
            borderRadius: 3,
            margin: 3,
            paddingLeft: 10
            }}
        />
                <Table  striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Last 24</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Marekt Cap</th>
                        </tr>
                    </thead>
                    <tbody style={{align: 'center', }}>
                            {filterCurrency.map((currency) => (
                                <tr key={currency.id}>
                                <td><img src={currency.image} style={{width: 25, height: 25, marginRight: 10}}/> {currency.symbol}</td>
                                <td>{formatDollar(currency.current_price, 20)}</td>
                                <td ><span className={currency.price_change_24h > 0 ?( 'text-success'): 'text-danger' }> {currency.price_change_24h.toFixed(2)}</span></td>
                                <td ><span className={currency.price_change_percentage_24h > 0 ?( 'text-success'): 'text-danger' }> {currency.price_change_percentage_24h.toFixed(2)} % </span></td>
                                <td>{formatDollar(currency.market_cap_change_24h, 12)}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
        </div>
    )
}
export default Coin;