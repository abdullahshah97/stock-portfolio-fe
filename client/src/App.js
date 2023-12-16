import React, { useState, useEffect } from 'react';
import SearchComponents from "./components/SearchComponents";
const finnhub = require('finnhub');

const App = () => {
    const REACT_APP_FINNHUB_API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;
    const finnhub_api_key = finnhub.ApiClient.instance.authentications['api_key'];
    finnhub_api_key.apiKey = REACT_APP_FINNHUB_API_KEY; // Replace this
    const finnhubClient = new finnhub.DefaultApi();
    const[ apiData, setData ] = useState({});

    useEffect(() =>
    {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/");
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [apiData]);
    return (
        <div className="App">

            <p>{ apiData.message }</p>
            <SearchComponents finnhubClient= {finnhubClient}/>

        </div>
    );
};

export default App;