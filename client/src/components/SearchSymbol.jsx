import React, { useState } from 'react';

const SearchSymbol = ({ onSubmit }) => {
    const [symbol, setSymbol] = useState("AAPL");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(symbol);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Symbol:
                <input
                    name="symbol"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default SearchSymbol;