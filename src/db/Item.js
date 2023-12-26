const mongoose = require('mongoose');
const { Schema } = mongoose;
const Item = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    uri: {
        type: String,
        required: false,
    },
    type:{
        type: String,
        required: false,
    },
    zone:{
        type: String,
        required: false,
    },
    atk:{
        type: String,
        required: false,
    },
    def:{
        type: String,
        required: false,
    },
    notes:{
        type: String,
        required: false,
    },
    imageAlt:{
        type: String,
        required: false,
    },
    imageSource:{
        type: String,
        required: false,
    },
});
module.exports = mongoose.model('Item', Item )