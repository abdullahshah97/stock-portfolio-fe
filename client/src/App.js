import React, { useEffect, useState } from 'react';
import SearchSymbol from "./components/SearchSymbol";
import QuoteFromSymbol from "./components/QuoteFromSymbol";
const finnhub = require('finnhub');

const App = () => {
    const REACT_APP_FINNHUB_API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;
    const [quoteData, setQuoteData] = useState([]);
    const [symbol, setSymbol] = useState("AAPL");
    const finnhub_api_key = finnhub.ApiClient.instance.authentications['api_key'];
    finnhub_api_key.apiKey = REACT_APP_FINNHUB_API_KEY; // Replace this
    const finnhubClient = new finnhub.DefaultApi();

    const fetchQuoteData = async (symbol) => {
        finnhubClient.quote(symbol, (error, data) => {
            setQuoteData(data);
        });
    };

    useEffect(() => {
        void fetchQuoteData(symbol);
    }, [symbol]);

    const handleSubmit = (symbol) => {
        void fetchQuoteData(symbol);
    };

    return (
        <div className="App">
            <SearchSymbol onSubmit={handleSubmit} />
            <QuoteFromSymbol symbol={symbol} quoteData={quoteData} />
        </div>
    );
};

export default App;