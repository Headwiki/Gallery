const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImageSchema = new Schema({
    // Array of strings
    tags: [{
        type: String
    }],
    views: {
        type: Number, 
        default: 0
    },
    upload_date: {
        type: Date,
        default: Date.now
    },
    file_size: {
        type: Number, 
        default: 0
    },
    image_dimensions: {
        height: {type: Number, default: 0},
        width: {type: Number, default: 0}
    }
})

module.exports = mongoose.model("Image", ImageSchema)