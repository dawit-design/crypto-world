import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Coin from './components/Coin'
import Catagory from './components/Catagory'


function App() {
  


  return (
    <div className="App">
      <h1>Crypto World</h1>
       <div class="Crypto List">
        
         <Coin />
          {/* <Catagory/>  */}
        
       </div>
    </div>
  );
}

export default App;
