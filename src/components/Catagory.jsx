
// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import {catagoryApi} from '../services/index'

// export default function Catagory() {
//     const [data, setData] = useState([])

//     useEffect(() => {
//       const getData = async () => {
//       const response = await axios.get(catagoryApi)
//       console.log(response.data)
//       setData(response.data)
      
      
//     }
//     getData()
//   },[])
//   return (
//     <div>Catagory</div>
//   )
// }

import {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom"

import React from 'react'

export default function Catagory(props) {

    const [change, setChange] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(props.currencies.length > 0 && params.id){
            const currencyFind = props.currencies.find((currency) => currency.id === params.id)
            console.log('currency find', currencyFind)
            if(currencyFind){
                setChange(currencyFind.price_change_24h)
            }
        }
        
    }, []);
  return (
    <div className="category">
        <h2>price change{change}</h2>
    </div>
  )
}
