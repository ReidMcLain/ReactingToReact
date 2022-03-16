import React, { useEffect, useState } from 'react';
import Greeter from './components/Greeter';

const App = () => {

    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 3000);
    }, [loaded])

    if (loaded == false) {
        return (
            <>
                <header>"Website loading..."</header>
                <button onClick={() => setLoaded(true)}>Click me to load page</button>
            </>
        );
    } else {
        return (
            <>
                <h1>
                    <Greeter phrase="Hello" name="Luke" />
                    <Greeter phrase="Hello" name="Ahsoka" />
                    <Greeter phrase="Hello" name="Yoda" />
                </h1>
                <input value={username} onChange={e => setUsername(e.target.value)} />
                <p>You are logging in as {username}</p>
            </>
        );
    };
};

export default App;