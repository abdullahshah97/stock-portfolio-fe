import React, {useEffect, useState} from "react";

const DropdownList = ({symbol, finnhubClient, updateSymbol}) => {
    const [stockList, setStockList] = useState([]);

    const fetchStockList = async (symbol) => {
        try {
            await finnhubClient.symbolSearch(symbol, (data, response) => {
                if (!response.ok) {
                    console.log(response);
                } else {
                    setStockList(data.result)
                }
            });
        }
        catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        void fetchStockList(symbol);
    }, [symbol]);// eslint-disable-line react-hooks/exhaustive-deps

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        updateSymbol(selectedValue);
    };

    return (
        <div>
            <label htmlFor="stockDropdown">Select a stock:</label>
            <select id="stockDropdown" value={symbol} onChange={handleSelectChange}>
                <option value="">Select...</option>
                {stockList.map((stock) => (
                    <option key={stock.symbol} value={stock.symbol}>
                        {stock.description}
                    </option>
                ))}
            </select>

            <p>Selected stock: {symbol}</p>
            <p>Number of stocks available: {stockList.length}</p>
        </div>
    );
};

export default DropdownList;