const {Game} = require("../models/games")
const validateName = async (req, res, next) => {
    try {
        const x = await Game.findOne({name: req.params.name})
        if (x !== null) {
            next()
        } else {
            res.status(500).json({msg: `Invalid game name`}) 
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { validateName }