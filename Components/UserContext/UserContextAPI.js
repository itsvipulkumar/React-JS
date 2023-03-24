import React, { useContext } from 'react'
import { AppContext } from './ContextAPI'

export default function UserContextAPI(props) {

    const userData = useContext(AppContext);
    console.log(userData.name);
    console.log(userData.age);
    return (
        <div>
            <h2>Hello This is {userData.name}</h2>
        </div>
    )
}
