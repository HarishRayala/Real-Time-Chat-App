import { useState } from 'react'
import './App.css'
import { Signup } from './Pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Signup/>
    </div>
  )
}

export default App
