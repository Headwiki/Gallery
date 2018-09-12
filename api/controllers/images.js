const mongoose = require('mongoose')
const Image = mongoose.model('Image')

// Get all images
exports.get_all_images = (req, res) => {
    Image.find({}, 'tags views upload_date file_size image_dimensions', (err, images) => {
        if (err) { console.error(err) }
        res.send({
            images: images
        })
    }).sort({_id:-1})
}

exports.add_image = (req, res) => {
    const db = req.db
    const tags = req.body.tags
    console.log(req.body)

    const new_image = new Image({
        tags: tags
    })

    new_image.save((err) => {
        if (err) { console.error(err) }
        res.send({
            success: true,
            message: 'Image saved successfully'
        })
    })
}