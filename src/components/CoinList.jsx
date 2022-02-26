// import React from 'react';
// import {Link} from "react-router-dom"

// function CoinList(props) {
//     return (
//         <div className = "coin-list" >

//         <input 
//         placeholder="Search Crypto" 
//         onChange={e => setSearch(e.target.value)} 
//         style={{
//             textAlign: 'center',
//             borderColor: 'black',
//             fontSize: 18,
//             borderRadius: 3,
//             margin: 3,
//             paddingLeft: 10
//             }}
//         />
//                 <Table  bordered hover variant="#010203"  >
//                     <thead style={{align: 'center', color: "White", cursor: 'pointer', backgroundColor: '#010203'}}>
//                         <tr>
//                         <th>Name</th>
//                         <th>Last 24</th>
//                         <th>Price</th>
//                         <th>Change</th>
//                         <th>Market Cap</th>
//                         </tr>
//                     </thead>
//                     <tbody style={{align: 'center', color: "white", cursor: 'pointer', backgroundColor: '#010203' }}>
//                             {filterCoins.map((coin) => (
//                                 <tr key={coin.id}>
//             <Link to={`/coins/${coin.id}`} style={{ textDecoration: 'none'}}>
//                                 <td><img src={coin.image} style={{width: 25, height: 25, marginRight: 10}}/> {coin.symbol}</td>
//                                 <td ><span className={coin.price_change_24h > 0 ?( 'text-success'): 'text-danger' }> {coin.price_change_24h.toFixed(2)}</span></td>
//                                 <td>{formatDollar(coin.current_price, 20)}</td>
//                                 <td ><span className={coin.price_change_percentage_24h  > 0  ?( 'text-success' ) : 'text-danger' }> {coin.price_change_percentage_24h.toFixed(2)} % </span></td>
//                                 <td>{formatDollar(coin.market_cap_change_24h, 12)}</td>
//             </Link>
//                                 </tr>
//                             ))}
//                     </tbody>
//                 </Table>
//         </div>
//     );
// }

// export default CoinList;