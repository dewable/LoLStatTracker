import { useState, useContext } from 'react'
import SummonerContext from '../SummonerContext'

const MatchView = () => {

    const { summoner } = useContext(SummonerContext)

    const [lastMatchPlayers, setLastMatchPlayers] = useState([])

    const base = 'http://localhost:5000'

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
        <div className='match-view'>
            <button onClick={() => getLastMatchInfo()}>Get last match data</button>
            <button onClick={() => console.log('button not implemented')}>other button</button>
            
            <ol className='center'>
                {lastMatchPlayers.map(p => { 
                    return (
                        <>
                            <li id={p.puuid}>{`champ: ${p.championName} | summoner: ${p.summonerName}`}</li>
                        </>
                )})}
            </ol>
        </div>
    )
}

export default MatchView