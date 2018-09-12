const image = require('express').Router()
const images = require('../')
// Get all images
image.route('/')
    .get()

// Get image given ID
image.route('/:id')
    .get((req, res) => {
        res.json({ express: ['/' + req.params.id, 'Image' + req.params.id] });
    }
)

module.exports = image