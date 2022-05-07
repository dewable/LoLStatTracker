import { Button } from 'react-bootstrap'
import { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SummonerContext from '../SummonerContext'

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 
}

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

        // If user comes back to page and doesn't change summoner value, don't send another request
        if (!isEmpty(summoner) & summoner.name === input.current.value.trim()) {
            nav('/home')
            return
        }

        fetch(`http://localhost:5000/user/${input.current.value}`)
            .then( r =>  {
                if (!r.ok) return r.text().then(t => {throw new Error(t)})
                return r.json()
            })
            .then(d => {
                console.log(d)
                setSummoner({...d})
                nav('/home')
            }).catch(e => alert(e.message))
        

    }

    const input = useRef(null)

    return (
        <div className="content">
            {/* This input checks if a summoner name has been entered, and will populate the text area */}
            <span><input ref={input} {...(!isEmpty(summoner) ? {defaultValue: summoner.name} :{placeholder: 'Enter Summoner Name'})} type='text'/></span> <br/>
            <span><Button onClick={() => submitSummoner()} variant="success" style={{border: "solid black"}}>Go</Button></span>
        </div>
    )
}

export default LandingPage