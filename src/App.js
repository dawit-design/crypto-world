import './App.css';

import Coin from './components/Coin'
import Home from './components/Home'

function App() {
  


  return (
    <div className="App">
      <h1>Crypto World</h1>
       <div class="Crypto List">
        
          <Coin />
          {/* <Home /> */}
        
       </div>
    </div>
  );
}

export default App;
