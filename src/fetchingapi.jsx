import { useState } from 'react';
import './App.css'
const FethcingApi = () =>
{
    const [advice, setAdvice] = useState ("");
    const [count, setCount] = useState(0);
    async function getAdvise() 
    {
        const apifetch = await fetch("https://api.adviceslip.com/advice");
        const data = await apifetch.json();
        setAdvice(data.slip.advice);
        setCount ((c) => c + 1);

    }
    return (
        <>
            <h1>{advice}</h1>
            <button onClick={getAdvise}>Get Advise</button>
            <Message count = {count} />
        </>
    );
}

export default FethcingApi

function Message({count})
{
    return(
        <p>you have total read {count} advice.</p>
    );
    
}