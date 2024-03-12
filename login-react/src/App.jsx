import { useState } from 'react'
import appFireBase from './credentials'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFireBase)

import Home from './pages/Home'
import Login from './pages/Login'
import './styles/App.css'

function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (userFireBase) => {
    if (userFireBase) {
      setUser(userFireBase)
    } else {
      setUser(null)
    }
  })

  return (
    <div>
      {user ? <Home /> : <Login />} 
    </div>
  )
}

export default App
