const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlacksmithMaterials = new Schema({
    formula: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    },
    quantity: {
        type: Schema.Types.Number,
        
    }

});
module.exports = new mongoose.model('BlacksmithMaterials', BlacksmithMaterials)