const mongoose = require('mongoose');
const { Schema } = mongoose;


const MonsterDrops = new mongoose.model('MonsterDrops', new Schema({
    monster: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Monster'
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }
}));

module.exports = MonsterDrops;