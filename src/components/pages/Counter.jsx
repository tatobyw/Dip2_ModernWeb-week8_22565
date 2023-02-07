import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='App'>
            <h1>Counter</h1>
            <p className='count'>{count}</p>
            <p>
                <button onClick={() => setCount((count) => count + 1)}>Up</button>
                <button onClick={() => setCount((count) => count = 0)}><p className='reset'>Reset</p></button>
                <button onClick={() => setCount((count) => count - 1)}>Down</button>
            </p>
        </div>
    )
}

export default Counter