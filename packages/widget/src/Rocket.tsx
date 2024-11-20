import { useState } from 'react'

import './Rocket.css'

function Rocket() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        🚀
      </div>
      <h1>Rocket Launcher</h1>
      <div className="card">
        Click to add fire
        <button onClick={() => setCount((count) => count + 1)}>
          amount of fire {count}
        </button>
      </div>
    </>
  )
}

export default Rocket
