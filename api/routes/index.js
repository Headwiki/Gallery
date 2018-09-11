const router = require('express').Router()
const image = require('./image')

// Main router
router.route('/')
    .get((req, res) => {
        res.json({ message: ['/', 'Main router!'] })
    })

router.route('/hello')
    .get((req, res) => {
        res.json({ message: ['/hello', 'Hello Express!'] })
    })    

// Load sub-router
router.use('/image', image)

module.exports = router
