const router = require('express').Router()
const images = require('../../controllers/images')

// Get all images
router.route('/')
    .get((req, res) => {
        res.json( {express: '/'} )
    })
    .post(images.add_image)

// Get image given ID
router.route('/:id')
    .get((req, res) => {
        res.json({ express: ['/' + req.params.id, 'Image' + req.params.id] });
    }
)

module.exports = router