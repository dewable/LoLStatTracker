import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Landing from "./pages/Landing"
import Home from './pages/Home'
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SummonerContext from './SummonerContext'


const App = () => {

  const [summoner, setSummoner] = useState({})

  return (
    <div className="App">
      <SummonerContext.Provider value={{summoner, setSummoner}}>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </SummonerContext.Provider>
    </div>
  )
}

export default App
