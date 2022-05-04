import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import SummonerContext from '../SummonerContext'
import MatchView from '../components/MatchView'


const Home = () => {

    let nav = useNavigate()
    const { summoner } = useContext(SummonerContext)

    return (
        <div>
            Home Page
            <h2>{summoner.name}</h2>
            <MatchView />
            <Button onClick={() => nav('/')} variant="success">Change Summoner</Button>
        </div>
    )
}

export default Home