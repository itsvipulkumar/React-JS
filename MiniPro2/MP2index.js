import React, { useState } from 'react'

function MP2index() {

    let date = new Date().toLocaleDateString() + ' ';
    let time = new Date().toLocaleTimeString();

    const [ctime, setcTime] = useState(time);
    let k = 129321;
    //    const updatedTime=()=>{
    //        time = new Date().toLocaleTimeString();
    //        setcTime(time);
    //     }
    setInterval(() => {
        setcTime = new Date().toLocaleTimeString();
        // setcTime(time);
    }, 1000);
    return (
        <>
            <div className="home">
                <div>
                    <h4>Digital Clock</h4>
                    <h1>{ctime}</h1>

                </div>
            </div>
        </>
    )
}

export default MP2index
