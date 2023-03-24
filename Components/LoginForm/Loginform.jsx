import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
export default function Loginform() {
    const [val, setVal] = useState({
        name: "",
        email: ""
    });
    const [size, setSize] = useState(window.screen.width);
    // const changeEvent = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setVal((prev) => {
    //         return { ...prev, [name]: value };
    //     })
    // }
    // const useEffect = (() => {
    //     console.log("Run");
    //     document.title = "ok"
    // }) 

    const changeWindowSize = () => {
        setSize(() => window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", changeWindowSize)

    })
    // console.log(val)
    return (
        <div>
            <h3>{size}</h3>
            {/* <TextField id="outlined-basic" type="text" name='name' onChange={changeEvent} value={val.name} label="Enter name" variant="outlined" /> */}
            {/* <TextField id="outlined-basic" label="Email" name='email' onChange={changeEvent} value={val.email} variant="outlined" /> */}
            {/* <p>{val.email}</p>
            <p>{val.name}</p> */}
        </div>
    )
}
