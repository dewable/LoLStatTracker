import { Button } from 'react-bootstrap'
import { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SummonerContext from '../SummonerContext'

const LandingPage = () => {

    // Used to navigate to Home Page
    let nav = useNavigate()

    // Used to 
    const { summoner, setSummoner } = useContext(SummonerContext)

    const submitSummoner = () => {
        if (input.current.value === null || input.current.value === '') {
            input.current.style.border = 'solid red'
            alert(`Summoner name shouldn't be empty!`)
            return
        }

        fetch(`http://192.168.194.250:5000/user/${input.current.value}`)
            .then( r =>  {
                if (!r.ok) return r.text().then(t => {throw new Error(t)})
                return r.json()
            })
            .then(d => {
                console.log(d)
                setSummoner({name: input.current.value})
                nav('/home')
            }).catch(e => alert(e.message))
        

    }

    const input = useRef(null)

    return (
        <div className='landing-page'>
            <h1 className = 'item'>LoL Stat Tracker</h1>
            <div id='landing-page-content' className='item'>
                {/* This input checks if a summoner name has been entered, and will populate the text area */}
                <input ref={input} {...(summoner.name !== '' ? {defaultValue: summoner.name} :{placeholder: 'Enter Summoner Name'})} type='text'/> <br/>
                <Button onClick={() => submitSummoner()} variant="success">Go</Button>
            </div>
        </div>
    )
}

export default LandingPage