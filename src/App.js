import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Coin from './components/Coin'
import Catagory from './components/Catagory'


function App() {
  


  return (
    <div className="App">
       <div class="Crypto List">
        
          <Catagory /> 
          {/* <Coin /> */}
        
       </div>
    </div>
  );
}

export default App;
