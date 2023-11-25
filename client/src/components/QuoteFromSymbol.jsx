import React, {useEffect, useState} from 'react';


const QuoteFromSymbol = ({symbol, finnhubClient, updateSymbol}) => {
    const [quoteData, setQuoteData] = useState([]);

    const fetchQuoteData = async (symbol) => {
        if (symbol !== "") {
            finnhubClient.quote(symbol, (error, data) => {
                setQuoteData(data);
            });
        }
    };

    useEffect(() => {
        void fetchQuoteData(symbol);
    }, [symbol]); // eslint-disable-line react-hooks/exhaustive-deps

    // const handleSubmit = (symbol) => {
    //     void fetchQuoteData(symbol);
    // };


    return (
        <p>
            Symbol: {symbol}<br />
            Current Price: {quoteData.c}
        </p>
    );
};

export default QuoteFromSymbol;