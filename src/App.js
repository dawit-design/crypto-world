import './App.css';
import { Link, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
// import Nav from './components/Nav'
import Coin from './components/Coin'
import Catagory from './components/Catagory'
import Trending from './components/Trending'

function App() {
  


  return (
    <div className="App">
       <div class="Crypto List">
          {/* <Coin /> */}
          <Trending />
       {/* <Nav />
        <Route exact path="/">  */}
        {/* </Route> */}
        {/* <Route exact path="trending/id">  */}
        {/* </Route> */}
        {/* <Route exact path="/"> 
          <Coin />
        </Route> */}

          {/* <Catagory />  */}
        
       </div>
    </div>
  );
}

export default App;
