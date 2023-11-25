import React, { useState } from 'react';
import DropdownList from './DropdownList';
import QuoteFromSymbol from './QuoteFromSymbol';
import SearchSymbol from './SearchSymbol';

const SearchComponents = ({finnhubClient}) => {
    const [symbol, setSymbol] = useState("AAPL");

    const updateSymbol = (newSymbol) => {
            setSymbol(newSymbol);
    }

    return(
        <div>
            <SearchSymbol symbol={symbol} updateSymbol={updateSymbol} />
            <DropdownList symbol={symbol} finnhubClient={finnhubClient} updateSymbol={updateSymbol} />
            <QuoteFromSymbol symbol={symbol} finnhubClient={finnhubClient} updateSymbol={updateSymbol} />
        </div>
    );
}
export default SearchComponents;