// import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import {Line} from "react-chartjs-2"
import axios from 'axios';
import {api} from '../services/index'

function Home (){
    const [currencies, setCurrencies] = useState('')
//    const [coinName, setCoinName] = useState([])
//    const [coinPrice, setCoinPrice] = useState([])

   const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get(api)
      .then(res => {
        // console.log(res.data);
        for (const dataObj of res.data) {
          empSal.push(dataObj.name);
          empAge.push(dataObj.current_price);
        //   empAge.push(parseInt(dataObj.current_price));
        }
        setCurrencies({
          labels: empAge,
          datasets: [
            {
              label: "level of thiccness",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empSal , empAge);
  };

  useEffect(() => {
    chart()
  },[])
    // if(!currencies) return null
    
    return (
        <div className = "coin-list">
            <h1>Chart Js</h1>
            <div>
            <Line
            data={currencies}
            options={{
                responsive: true,
                title: { text: "THICCNESS SCALE", display: true },
                scales: {
                yAxes: [
                    {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true
                    },
                    gridLines: {
                        display: false
                    }
                    }
                ],
                xAxes: [
                    {
                    gridLines: {
                        display: false
                    }
                    }
                ]
                }
            }}
            />
        </div>
     </div>
    )
}
export default Home;