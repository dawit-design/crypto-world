import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import {api} from '../services/index'
import { WatchListContext } from "../context/watchListContext";
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap';

const Coin = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
   const [search, setSearch] = useState("")
   const [filterCoins, setFilterCoins] = useState([])
  
  useEffect(() => {
    const getCoins = async () => {
      const response = await axios.get(api)
    //   console.log(response.data[0])
      setCoins(response.data)
      if(response.data) {
          setFilterCoins(
          response.data.filter((coin) => {
            return coin.name?.toLowerCase().includes(search.toLocaleLowerCase());
          })
        );
      }
      
    };
    

     getCoins()

  }, [search]);

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat(
        'en-US',
        {
            style: 'currency',
            currency: 'usd',
            maximumSignificantDigits
        })
        .format(number)
        console.log(formatDollar)

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className = "coin-list" >

        <input 
        placeholder="Search Crypto" 
        onChange={e => setSearch(e.target.value)} 
        style={{
            textAlign: 'center',
            borderColor: 'black',
            fontSize: 18,
            borderRadius: 3,
            margin: 3,
            paddingLeft: 10
            }}
        />
        <Link to="coins/id" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Table  bordered hover variant="#010203"  >
                    <thead style={{align: 'center', color: "White", cursor: 'pointer', backgroundColor: '#010203'}}>
                        <tr>
                        <th>Name</th>
                        <th>Last 24</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody style={{align: 'center', color: "white", cursor: 'pointer', backgroundColor: '#010203' }}>
                            {filterCoins.map((coin) => (
                                <tr key={coin.id}>
                                <td><img src={coin.image} style={{width: 25, height: 25, marginRight: 10}}/> {coin.symbol}</td>
                                <td ><span className={coin.price_change_24h > 0 ?( 'text-success'): 'text-danger' }> {coin.price_change_24h.toFixed(2)}</span></td>
                                <td>{formatDollar(coin.current_price, 20)}</td>
                                <td ><span className={coin.price_change_percentage_24h  > 0  ?( 'text-success' ) : 'text-danger' }> {coin.price_change_percentage_24h.toFixed(2)} % </span></td>
                                <td>{formatDollar(coin.market_cap_change_24h, 12)}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </Link>
        </div>
    )
  };

  return <div>{renderCoins()}</div>;
};

export default Coin;




