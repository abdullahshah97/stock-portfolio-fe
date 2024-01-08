import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import React from 'react';
import SearchComponents from "./components/SearchComponents";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const finnhub = require('finnhub');

const App = () => {
    const REACT_APP_FINNHUB_API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;
    const finnhub_api_key = finnhub.ApiClient.instance.authentications['api_key'];
    finnhub_api_key.apiKey = REACT_APP_FINNHUB_API_KEY; // Replace this
    const finnhubClient = new finnhub.DefaultApi();

    return (
        <Router>
            <div className="App">

            <Routes>
                <Route path="/"  element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignUpPage/>} />
                <Route path="/stocks" element={<SearchComponents finnhubClient={finnhubClient}/>} />
            </Routes>
        </div>
        </Router>
    );
};

export default App;