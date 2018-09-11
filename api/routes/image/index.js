const image = require('express').Router()

// Get all images
image.route('/')
    .get((req, res) => {
        res.json({ message: ['/', 'All images'] })
        
    }
)

// Get image given ID
image.route('/:id')
    .get((req, res) => {
        res.json({ express: ['/' + req.params.id, 'Image' + req.params.id] });
    }
)

module.exports = image