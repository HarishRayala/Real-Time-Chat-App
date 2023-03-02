import { useState } from 'react'
import './App.css'
import Chat from './Pages/Chat/Chat'
import { Signup } from './Pages/Signup'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <Signup/> */}
     <div className='blur' style={{top:"-18%", right:"0"}}></div>
     <div className='blur' style={{top:"36%", left:"-8rem"}}></div>
     <Home/>
     {/* <Profile/> */}
     <Routes>
        <Route path="/chat" element={<Chat/>} />
     </Routes>
    </div>
  )
}

export default App
