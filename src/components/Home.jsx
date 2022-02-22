// // import {Link} from "react-router-dom";
// import {useState, useEffect} from 'react';
// import {Line} from "react-chartjs-2"
// import axios from 'axios';
// import {api} from '../services/index'

// function Home (){
//     const [currencies, setCurrencies] = useState('')
// //    const [coinName, setCoinName] = useState([])
// //    const [coinPrice, setCoinPrice] = useState([])

//    const chart = () => {
//     let empSal = [];
//     let empAge = [];
//     axios
//       .get(api)
//       .then(res => {
//         // console.log(res.data);
//         for (const dataObj of res.data) {
//           empSal.push(dataObj.name);
//           empAge.push(dataObj.current_price);
//         //   empAge.push(parseInt(dataObj.current_price));
//         }
//         setCurrencies({
//           labels: empAge,
//           datasets: [
//             {
//               label: "level of thiccness",
//               // import {Link} from "react-router-dom";
// import {useState, useEffect} from 'react';
// import axios from 'axios';
// import {Line} from "react-chartjs-2"
// import {api} from '../services/index'

// function Coin(){
//     const [currencies, setCurrencies] = useState([])
   

//   useEffect(() => {
//       let coinName = []
//       let coinPrice = []
//     const getCoins = async () => {
//       const resp = await axios.get(api)
//       for(const dataObj of resp.data){
//           coinName.push(dataObj.name)
//           coinPrice.push(dataObj.current_price)
//       }
//       console.log(resp.data[0])
//       setCurrencies({
//           labels: coinPrice,
//           datasets: [
//               {
//               label: "level of thiccness",
//               data: coinName,
//               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
//               borderWidth: 4
//               }
//           ]
//       })
//     }
//     console.log(coinName, coinPrice)
//     getCoins()
//   },[])
//     if(!currencies) return null
    
//     return (
//         <div className = "coin-list">
//             {/* {currencies.map((currency) => (
//                 <div key={currency.id} className="coins"> 
//                  <h2>{currency.name}</h2>
//                  <img src={currency.image}/>
//                  <h3>$ {currency.current_price} </h3>
//                  <h3>{currency.market_cap_change_percentage_24h.toFixed(2)} %</h3>
//                 </div>
//             ))} */}
//             <h1>Chart Js</h1>
//             <div>
//             <Line
//             data={currencies.map((currency) => ({
                
//             }))}
//             options={{
//                 responsive: true,
//                 title: { text: "THICCNESS SCALE", display: true },
//                 scales: {
//                 yAxes: [
//                     {
//                     ticks: {
//                         autoSkip: true,
//                         maxTicksLimit: 10,
//                         beginAtZero: true
//                     },
//                     gridLines: {
//                         display: false
//                     }
//                     }
//                 ],
//                 xAxes: [
//                     {
//                     gridLines: {
//                         display: false
//                     }
//                     }
//                 ]
//                 }
//             }}
//             />
//         </div>
//         </div>
//     )
// }
// export default Coin;: empSal,
//               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
//               borderWidth: 4
//             }
//           ]
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     console.log(empSal , empAge);
//   };

//   useEffect(() => {
//     chart()
//   },[])
//     // if(!currencies) return null
    
//     return (
//         <div className = "coin-list">
//             <h1>Chart Js</h1>
//             <div>
//             <Line
//             data={currencies}
//             options={{
//                 responsive: true,
//                 title: { text: "THICCNESS SCALE", display: true },
//                 scales: {
//                 yAxes: [
//                     {
//                     ticks: {
//                         autoSkip: true,
//                         maxTicksLimit: 10,
//                         beginAtZero: true
//                     },
//                     gridLines: {
//                         display: false
//                     }
//                     }
//                 ],
//                 xAxes: [
//                     {
//                     gridLines: {
//                         display: false
//                     }
//                     }
//                 ]
//                 }
//             }}
//             />
//         </div>
//      </div>
//     )
// }
// export default Home;