const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const games = new Schema ({
    name:{
        type: String,
        required: true,
        unique: true
    },
    genre:{
        type: String,
        required: true

    },
    score:{
        type: Number
    }
})

const Game = mongoose.model('Game', games)

module.exports = {Game}
