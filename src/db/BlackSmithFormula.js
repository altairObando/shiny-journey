const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlackSmithFormula = new Schema({
    city: {
        type: String,
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }

});
module.exports = new mongoose.model('BlackSmithFormula', BlackSmithFormula)