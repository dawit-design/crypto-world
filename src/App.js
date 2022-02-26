import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Coin from './components/Coin'
import React from "react";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import CoinDetailPage from "./containers/CoinDetailPage";
import CoinSummaryPage from "./containers/CoinSummaryPage";
import Header from "./components/Header";
import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
        
          <Header />
          <Routes>
          <Route exact path="/" element={<Coin />} />
          <Route path="/coins/:id" element={<CoinDetailPage />} />
          </Routes>
       
      </WatchListContextProvider>
    </div>
  );
};

export default App;