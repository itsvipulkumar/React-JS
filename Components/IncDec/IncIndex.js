import React, { useContext, useState } from 'react'
import { AppProvider, contextAPI } from '../Context2/UserContext';
import './style.css'
export default function IncIndex() {
    const [num, setNum] = useState(0);

    const incEvent = () => {
        setNum(num + 1);
    }
    const decEvent = () => {
        if (num > 0 ? setNum(num - 1) : 0);

    }

    const userData = useContext(contextAPI);
    return (
        <>
            <div className='wrap'>
                <div>
                    <div>
                        <h1>{num}</h1>
                    </div>
                    <div className='button'>
                        <button onClick={incEvent}>Inc</button>
                        <button onClick={decEvent}>Dec</button>
                    </div>
                </div>
            </div>

            <p> {userData.name}</p>
        </>
    )
}
