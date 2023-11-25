import React, { useEffect, useState } from 'react';
import SearchComponents from "./components/SearchComponents";
const finnhub = require('finnhub');

const App = () => {
    const REACT_APP_FINNHUB_API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;
    const finnhub_api_key = finnhub.ApiClient.instance.authentications['api_key'];
    finnhub_api_key.apiKey = REACT_APP_FINNHUB_API_KEY; // Replace this
    const finnhubClient = new finnhub.DefaultApi();

    return (
        <div className="App">
            <SearchComponents finnhubClient= {finnhubClient}/>
        </div>
    );
};

export default App;