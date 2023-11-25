import React from 'react';

const SearchSymbol = ({symbol, updateSymbol}) => {

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     updateSymbol(symbol);
    // };

    return (
        <form >
            <label>
                Symbol:
                <input
                    name="symbol"
                    value={symbol}
                    onChange={(e) => updateSymbol(e.target.value)}
                />
            </label>
        </form>
    );
};

export default SearchSymbol;