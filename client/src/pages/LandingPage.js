import { Button } from 'react-bootstrap'
import { useRef } from 'react'

const LandingPage = () => {

    const submitSummoner = () => {
        if (input.current.value === null || input.current.value === '') {
            input.current.style.border = 'solid red'
            alert(`Summoner name shouldn't be empty!`)
            return
        }

        console.log(input.current.value)
    }

    const input = useRef(null)

    return (
        <div className='landing-page'>
            <h1 className = 'item'>LoL Stat Tracker</h1>
            <div id='landing-page-content' className='item'>
                <input ref={input} placeholder='Enter Summoner Name' type='text'/> <br/>
                <Button onClick={() => submitSummoner()} variant="success">Go</Button>
            </div>
        </div>
    )
}

export default LandingPage