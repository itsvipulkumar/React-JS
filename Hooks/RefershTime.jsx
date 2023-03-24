
import React, { useState } from 'react'


const RefershTime = () => {

    let date = new Date().toLocaleDateString() + ' ';
    let time = new Date().toLocaleTimeString();
    let newDate = new Date();
    let year = newDate.getFullYear();
    let mon = newDate.getMonth() + 1;
    const [samay, setSamay] = useState(time);
    const getTime = () => {
        // window.location.reload();
        let newtime = new Date().toLocaleTimeString();
        setSamay(newtime);
    }
    return (
        <>
            <h2>Hello Timer!</h2>
            <h4>{year}</h4>
            <h4>{mon}</h4>
            <h4>{`Date is : ${date}`}</h4>
            <h4>{`Time is : ${samay}`}</h4>
            <button onClick={getTime}>Get Time</button>
        </>
    )
}
export default RefershTime