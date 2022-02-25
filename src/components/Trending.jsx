import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import {api, trendingApi, historicalDataApi, marketChartApi, catagoryApi} from '../services/index'


export default function Trending() {
    const [trend, setTrend] = useState([])

    useEffect(() => {
      const getTrending = async () => {
      const resp = await axios.get(trendingApi)
      console.log('hello', resp)
      setTrend(resp.data)
    }
    getTrending()
  },[])

  return (
    <div>Trending</div>
  )
}
