import React, { useState } from 'react';
import ListData from './ListData';
import './style.css';
export default function ToDoIndex() {
    const [val, setVal] = useState("");
    const [items, setItems] = useState([]);
    const changeEvent = (e) => {
        let a = e.target.value;
        setVal(a);
    }
    const clickEvent = () => {
        if (val != " ") {
            setItems((oldValue) => {
                return [...oldValue, val];
            })
        }
        setVal(" ")
    }
    const deleteEvent = (id) => {
        console.log("Deleted")
        setItems((oldValue) => {
            return oldValue.filter((arr, index) => {
                return id !== index
            })
        })
    }
    console.log({ items });
    return (
        <>
            <div id='todo'>
                <div className="todoContainer">
                    <div className='todoWrap'>
                        <h2>TO DO List React App !</h2>
                        <div>
                            <input type="text" placeholder='Enter Item' value={val} name="item" onChange={changeEvent} />
                            <button onClick={clickEvent}>Add Item</button>
                        </div>
                    </div>
                    <div>
                        {
                            items.map((element, index) => {
                                return <ListData
                                    key={index}
                                    id={index}
                                    event={deleteEvent}
                                    text={element} />
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
