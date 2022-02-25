import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import {api, trendingApi, historicalDataApi, marketChartApi, catagoryApi} from '../services/index'


export default function Trending(props) {
    const [trends, setTrends] = useState([])

    useEffect(() => {
      const getTrending = async () => {
      const resp = await axios.get(trendingApi)
      console.log('hello', resp.data.coins[0])
      setTrends(resp.data.coins)
    }
    getTrending()
  },[])
  return (
    <div className="trending">
    <h1 style={{align: 'center', color: "white", cursor: 'pointer'}}>Watch List</h1>
        <Table  bordered hover variant="#010203"  >
                    <thead style={{align: 'center', color: "white", cursor: 'pointer'}}>
                        <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Rank</th>
                        </tr>
                    </thead>
                    <tbody style={{align: 'center', color: "white", cursor: 'pointer' }}>
                            {trends.map((trend) => (
                                <tr key={trend.item.coin_id}>
                                <td><img src={trend.item.small} style={{width: 25, height: 25, marginRight: 10}}/> {trend.item.symbol}</td>
                                <td ><span className={trend.item.price_btc> 0 ?( 'text-success'): 'text-danger' }> {trend.item.price_btc.toFixed(6)}  </span></td>
                                <td>{trend.item.market_cap_rank}</td>
                                </tr>
                            ))}
                    </tbody>
        </Table>
    </div>
  )
}
