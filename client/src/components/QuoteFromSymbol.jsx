import React from 'react';

const QuoteFromSymbol = ({ symbol, quoteData }) => {
    return (
        <p>
            Symbol: {symbol}<br />
            Current Price: {quoteData.c}
        </p>
    );
};

export default QuoteFromSymbol;