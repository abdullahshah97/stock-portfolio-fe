import React, {useEffect, useState} from 'react';


const QuoteFromSymbol = ({symbol, finnhubClient}) => {
    const [quoteData, setQuoteData] = useState([]);

    useEffect(() => {
        const fetchQuoteData =  async (symbol) => {
            if (symbol !== "") {
                finnhubClient.quote(symbol, (error, data) => {
                    setQuoteData(data);
                });
            }
        };
        void fetchQuoteData(symbol);
    }, [symbol]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <p>
            Symbol: {symbol}<br />
            Current Price: {quoteData.c}
        </p>
    );
};

export default QuoteFromSymbol;