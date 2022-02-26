import React from 'react';
import AddCoin from '../components/AddCoin'
import Coin from '../components/Coin'
function CoinSummaryPage(props) {
    return (
        <div>
            <Coin />
            <AddCoin />
        </div>
    );
}

export default CoinSummaryPage;