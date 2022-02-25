import React, {createContext, useState} from 'react';
export const watchListContext = createContext()
function WatchListContextProvider(props) {
    const [watchList, setWatchList] = useState(["bitcoin", "ethereum", "solana", "cardano"])
    return (
        <WatchListContext.Provider value={{watchList}}>

        {props.children}

        </WatchListContext.Provider>
    );
}

export default WatchListContext;