import './App.css';
import { Link, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Coin from './components/Coin'
import Trending from './components/Trending'
import CoinDetailPage from './containers/CoinDetailPage'

function App() {
  


  return (
    <div className="App">
       <div class="Crypto List">
       <h1 style={{align: 'center', color: "white", cursor: 'pointer'}}>Crypto World</h1>
       {/* <BrowserRouter>  */}
       {/* <Route exact path="/" component={Coin} /> */}
       {/* <Route exact path="/coins/:id" component={CoinDetailPage} /> */}
          {/* <Trending /> */}
          <Coin />
         {/* </BrowserRouter>  */}
        
       </div>
    </div>
  );
}

export default App;
