import React, { useState } from 'react'

function CounterContext() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
    Counter: {counter}
    <buttton
      className="btn btn-primary"
      onClick={() => setCounter(counter + 1)}
    >
      Add
    </buttton>
    </div>
  )
}

export default CounterContext
