import { useState } from 'react'

const SummonerView = ({ summoner }) => {

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
        <div className='center'>
            <h2>{summoner.name}</h2>
            <h3>LVL: {summoner.summonerLevel}</h3>

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

export default SummonerView