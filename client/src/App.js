import React, {useEffect, useState} from 'react';
const finnhub = require('finnhub');
//TODO: Add a form to allow users to enter a stock symbol
//TODO: Label the data according to json databoug
function App() {

    const [apiData, setApiData] = useState([])
    const [symbol, setSymbol] = useState("AAPL")
    const finnhub_api_key = finnhub.ApiClient.instance.authentications['api_key'];
    finnhub_api_key.apiKey = "clf63cpr01qovepplvugclf63cpr01qovepplvv0" // Replace this
    const finnhubClient = new finnhub.DefaultApi()

    const fetchData = async () => {
        finnhubClient.quote(symbol, (error, data, response) => {
            setApiData(data)
        });
    }

    useEffect(() => {
        fetchData();
    }, [symbol]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Symbol:
                    <input
                        name="symbol"
                        value={symbol}
                        onChange={e => setSymbol(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>
                Symbol: {symbol}<br></br>
                Current Price: {apiData.c}
            </p>
        </div>
    );
}

export default App;