import { useState, useContext, useEffect } from 'react'
import SummonerContext from '../SummonerContext'
import kills from '../assets/match-view/kills.png'
import deaths from '../assets/match-view/deaths.png'
import gold from '../assets/match-view/gold.png'
import cs from '../assets/match-view/cs.png'
import champ from '../assets/match-view/Viego-Icon.png'

const MatchView = () => {

    const { summoner } = useContext(SummonerContext)

    const [champIcon, setChampIcon] = useState('')

    const base = 'http://localhost:5000'

    useEffect(() => {
        if (empty(summoner)) return

        fetch(`${base}/riot/${summoner.puuid}/last-match`)
            .then(r => r.json())
            .then(d => { 
                console.log(d)
                const data = d.info.participants.filter(p => p.summonerName === summoner.name)[0]
                console.log(data)
                setChampIcon(`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${data.championName}.png`)
            })
    }, [])

    const getLastMatchInfo = () => {
        if (empty(summoner)) return

        fetch(`${base}/riot/${summoner.puuid}/last-match`)
            .then(r => r.json())
            .then(d => {
                console.log(d)
                // setLastMatchPlayers(d.info.participants)
            })
    }

    const empty = (obj) => {
        return Object.keys(obj).length === 0
    }

    return (
        <div className='match-view' 
            style={{
                height: '30rem', 
                width: '25em', 
                border: '2px solid black',
                background: 'white'}}>
            
            <img src={champIcon} style={{
                display: 'flex',
                borderRadius: '50%', 
                background: 'white',
                width: '8rem',
                height: '8rem',
                transform: 'translate(103%, -50%)',
                border: '2px solid black'}}> 
            </img>

            <div className='stats'>
                <img src={kills} style={{width: '5em', height: '5em'}}></img><p>?</p>
                <img src={deaths} style={{width: '5em', height: '5em'}}></img><p>?</p>
                <img src={gold} style={{width: '2.5em', height: '2.5em'}}></img><p>?</p>
                <img src={cs} style={{width: '2.5em', height: '2.5em'}}></img><p>?</p>
            </div>
        </div>
    )
}

export default MatchView