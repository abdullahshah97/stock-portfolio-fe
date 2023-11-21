import React, {useEffect, useState} from 'react';

function App() {
    
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/").then(
            response => response.json()
        ).then(
            data => setBackendData(data)
        )
    }, []);

    return (
        <div>
            {(typeof backendData.users !== 'undefined') ? (
                <ul>
                    {backendData.users.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            ) : (
                <p>Waiting for backend data...</p>
            )}
        </div>
    );
}

export default App;