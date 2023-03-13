import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)



function plus(){
  setCount(prevCount => prevCount +1)
}


function subtract(){
  setCount(prevCount => prevCount -1)
}


  return (
    <main className="app">
      <div className="container">
      <div className="subtract controls" onClick={subtract}>-</div>
        <div className="count result">
          {count}
        </div>
        <div className="plus controls" onClick={plus}>+</div>
      </div>
    </main>
  )
}

export default App
