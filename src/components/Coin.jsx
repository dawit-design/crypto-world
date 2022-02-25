import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {Table} from 'react-bootstrap';
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
            <Link to="coins/coinDetail" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Table  bordered hover variant="#010203"  >
                    <thead style={{align: 'center', color: "white", cursor: 'pointer'}}>
                        <tr>
                        <th>Name</th>
                        <th>Last 24</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody style={{align: 'center', color: "white", cursor: 'pointer' }}>
                            {filterCurrency.map((currency) => (
                                <tr key={currency.id}>
                                <td><img src={currency.image} style={{width: 25, height: 25, marginRight: 10}}/> {currency.symbol}</td>
                                <td ><span className={currency.price_change_24h > 0 ?( 'text-success'): 'text-danger' }> {currency.price_change_24h.toFixed(2)}</span></td>
                                <td>{formatDollar(currency.current_price, 20)}</td>
                                <td ><span className={currency.price_change_percentage_24h  > 0  ?( 'text-success' ) : 'text-danger' }> {currency.price_change_percentage_24h.toFixed(2)} % </span></td>
                                <td>{formatDollar(currency.market_cap_change_24h, 12)}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </Link>
        </div>
    )
}
export default Coin;










// import React from "react";
// import { Link } from "react-router-dom";

// const Coin = ({ coin, deleteCoin }) => {
//   return (
//     <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
//       <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
//         <img className="coinlist-image" src={coin.image} alt="" />
//         <span className="text-decoration-none">{coin.current_price}</span>

//         <span
//           className={
//             coin.price_change_percentage_24h < 0
//               ? "text-danger mr-2"
//               : "text-success mr-2"
//           }
//         >
//           {" "}
//           {coin.price_change_percentage_24h < 0 ? (
//             <i className="fas fa-sort-down align-middle mr-1"></i>
//           ) : (
//             <i className="fas fa-sort-up align-middle mr-1"></i>
//           )}
//           {coin.price_change_percentage_24h}
//         </span>
//         <i
//           onClick={(e) => {
//             e.preventDefault();
//             deleteCoin(coin.id);
//           }}
//           className="delete-icon far fa-times-circle text-danger"
//         ></i>
//       </li>
//     </Link>
//   );
// };

// export default Coin;