const userRouter = require('express').Router()

userRouter.route('/user/:summoner').get( (req, res) =>  {
    console.log('REQUEST - /riot/:summoner.')
    res.send('not implemented')
})

module.exports = userRouter