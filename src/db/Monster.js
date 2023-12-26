const mongoose = require('mongoose');
const { Schema } = mongoose;

const Monster= new Schema({
    name:{
        type: String,
        required: true,
    },
    imageSource: {
        type: String,
        required: false,
    },
    attr:{
        type: String,
        required: false,
    },
    weak:{
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Monster',Monster)