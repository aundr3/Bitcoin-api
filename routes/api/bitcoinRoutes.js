const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

// All Cartons
// localhost:3000/bitcoin
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/bitcoin/historical_prices'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/bitcoin', {
                title: 'Bitcoin History',
                name: 'Bitcoin History List',
                data
            })
        })
})

module.exports = router