import SummonerView from "./components/SummonerView"
import { Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage"
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const summoner = {
    name: 'Dewable',
    summonerLevel: -1000
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
