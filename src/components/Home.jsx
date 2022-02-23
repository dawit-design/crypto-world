// import React, { useState, useEffect, useRef } from "react";
// import Dashboard from "./Dashboard";
// import { formatData } from "../services/utils";
// import {api, marketChartApi, hisoricalDataApi} from '../services/index'
// // import "./styles.css";

// export default function Home() {
//   const [currencies, setcurrencies] = useState([]);
//   const [pair, setpair] = useState("");
//   const [price, setprice] = useState("0.00");
//   const [pastData, setpastData] = useState({});
//   const ws = useRef(null);
//   let first = useRef(false);

//    useEffect(() => {
//     // ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");

//     let pairs = [];

//     const apiCall = async () => {
//       await fetch(api)
//         .then((res) => res.json())
//         .then((data) => (pairs = data));
//     //   let filtered = pairs.filter((pair) => {
//     //     if (pair.current_price === "USD") {
//     //       return pair;
//     //     }
//     //   });
//     //   console.log(filtered)

//       pairs= pairs.sort((a, b) => {
//         if (a.current_price < b.current_price) {
//           return -1;
//         }
//         if (a.current_price> b.current_price) {
//           return 1;
//         }
//         return 0;
//       });
//       console.log(pairs)

      
//       setcurrencies(pairs);

//       first.current = true;
//     };

//     apiCall();
//   }, []); 


//    useEffect(() => {
//        //prevents this hook from running on initial render
//     if (!first.current) {
      
//       return;
//     }

    
//     let msg = {
//       type: "subscribe",
//       product_ids: [pair],
//       channels: ["ticker"]
//     };
//     let jsonMsg = JSON.stringify(msg);
//     ws.current.send(jsonMsg);

//     // let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
//     const fetchHistoricalData = async () => {
//       let dataArr = [];
//       await fetch(historicalDataURL)
//         .then((res) => res.json())
//         .then((data) => (dataArr = data));
      
//       let formattedData = formatData(dataArr);
//       setpastData(formattedData);
//     };

//     fetchHistoricalData();

//     // ws.current.onmessage = (e) => {
//     //   let data = JSON.parse(e.data);
//     //   if (data.type !== "ticker") {
//     //     return;
//     //   }
// //every time we receive an even from the websocket for our currency pair, update the price in state

//       if (data.product_id === pair) {
//         setprice(data.price);
//       }
//     },
   
//   }, [pair]);

//   return (
//     <div>Home</div>
//   )
// }
