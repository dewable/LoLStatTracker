const https = require('https')
const userRouter = require('express').Router()

const token = `?api_key=${process.env.RIOT_API_KEY}`
const base = 'https://na1.api.riotgames.com'

const matchBase = 'https://americas.api.riotgames.com'

const matchRoute1 = '/lol/match/v5/matches/by-puuid/'
const matchRoute2 = '/ids'
const getMatchRoute = '/lol/match/v5/matches/'

userRouter.route('/user/:summoner').get( (req, res) =>  {
    console.log('REQUEST - /user/:summoner')

    const url = `${base}/lol/summoner/v4/summoners/by-name/${req.params.summoner}${token}`

    // https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/dewable?api_key=RGAPI-0f425409-9df1-48dd-bf6d-278303656852

    // https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/dewable?api_key=RGAPI-5e78bdc6-86b5-48e8-8d57-bbd0db570f2a

    https.get(url, response => {
        let data = ''
        response.on('data', d => data += d)
        response.on('end', () => {
            data = JSON.parse(data)

            if (data.status) res.status(400).send(data.status.message)
            else res.status(200).send(data)
        })
        response.on('error', e => res.status(404).send('Error!'))
    }).end()
})

userRouter.route('/riot/:puuid/last-match').get( (req, res) => {
    console.log('REQUEST - /riot/:puuid/last-match.')

    const count = 5

    const url = `${matchBase}/lol/match/v5/matches/by-puuid/${req.params.puuid}/ids${token}&count=${count}`

    const queryRequest = https.get(url, response => {
        let data = ''
        response.on('data', d => data += d)
        response.on('end', () => {
            data = JSON.parse(data)
            
                https.get(`${matchBase}/lol/match/v5/matches/${data[0]}${token}`, response => {
                    let data = ''
                    response.on('data', d => data += d)
                    response.on('end', () => res.status(200).send(data))
                    response.on('error', e => console.log(e))
                })
        })
        response.on('error', e => console.log(e))
    }).end()
})

module.exports = userRouter