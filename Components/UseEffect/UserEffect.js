
import React, { useEffect, useState } from 'react'

export default function UserEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Click ${count} times`
    })
    const clickEvent = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={clickEvent}>Click Me</button>
        </div>
    )
}
