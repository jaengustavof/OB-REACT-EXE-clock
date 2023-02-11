import React, {useState, useEffect} from 'react';

const Clock = () => {

    const [date, setDate]           = useState(new Date());
    const [age, setAge]             = useState(41);
    const [name, setNamte]          = useState('Gustavo');
    const [lastName, setLastName]   = useState('Jaen Vidal');
    
 

    useEffect(() => {
        const tick = setInterval(() => {
            setDate(new Date()) ;
        }, 1000);
        return () => {
            clearInterval(tick)
        };
    }, []);
    
    return (
        <div>
            <h2>{`Actual time: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</h2>
            <h3>{name} {lastName}</h3>
            <h1>Age: {age}</h1>
        </div>
    );
}

export default Clock;
