import React, { useState } from 'react';
import './DarkmoodStyle.css';
export default function TextForm() {
    const [text, setText] = useState("");
    const clickEvent = () => {
        let ans = text.toUpperCase();
        setText(ans);
    }
    const changeEvent = (e) => {
        console.log();
        setText(e.target.value)
    }
    let w = text.split(" ").length;
    let ch = text.length;

    const [style, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [mybtn, setMybtn] = useState("Dark Mood");
    const changeMood = () => {
        if (style.color == 'black') {
            setStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setMybtn("Normal Mood");
        }
        else {
            setStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setMybtn("Dark Mood");
        }
    }
    return (
        <div className='outerBox' style={style}>
            <div className='innerBox'>
                <div>
                    <h4>Hello {mybtn}</h4>
                    <div>
                        <input type="text" placeholder='Enter Your Name' value={text} onChange={changeEvent} />
                        <button onClick={clickEvent}>Submit </button>
                        <button onClick={changeMood} >or Change Mood </button>
                        <p>Your Entered Information Will be Apprer Here!</p>
                        <p>{text}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
