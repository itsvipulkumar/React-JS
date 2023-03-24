import React from 'react'
import './style.css'
export default function ListData(props) {
    console.log(props.id)
    const deleteEvent = () => {

    }
    return (
        <>
            <div className='item_box'>
                <p onClick={() => {
                    props.event(props.id);
                }}>X</p>
                <li className='lists'>{props.text}</li>
            </div>
        </>
    )
}
