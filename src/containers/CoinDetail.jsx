// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import HistoryChart from "../components/HistoryChart";
// import CoinData from "../components/CoinData";
// import coinGecko from "../services/coinGecko";

// const CoinDetailPage = () => {
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       const results = await coinGecko.get(`/coins/${id}/market_chart/`,{
//           params: {
//               vs_currency: "usd",
//               days: "1",
//           }
//       })
//       console.log(results)
      
//     };

//     fetchData();
//   }, []);

    
//     return (
//       <div className="coinlist">
//         <HistoryChart />
//         <CoinData  />
//       </div>
//     );
//   };



// export default CoinDetailPage;