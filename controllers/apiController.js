const {Game} = require("../models/games")
const {validationResult} = require("express-validator")
const axios = require ('axios')

module.exports = {
    showGames: async (req,res) => {
        const games = await Game.find()
        res.status(200).json({games})
    },
    async searchGame (req,res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const searchedGame = await Game.findOne({name: req.params.name})
                res.status(201).json(searchedGame)
            } else {
                res.status(401).json(err.errors)
            }
        } catch (error) {
            
        }
    },
    createGame: async (req,res) => {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const newGame = new Game(req.body)
                    await newGame.save()
                    res.satus(201).json({newGame})
            }else{
                res.status(401).json(err.errors)
            }
        } catch (error) {
            res.status(401).json({error})
        }
    },
    editGame: async (req,res) => {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                await Game.findOneAndUpdate({name: req.params.name}, req.body)
                res.status(201).json({msg: ` The record ${req.params.name} has been successfully updated`})
            }else{
                res.status(401).json(err.errors)
            }
        } catch (error) {
            res.status(401).json({error})
        }
    },
    deleteGame: async (req,res) => {
        await Game.findOneAndDelete({name: req.params.name});
        res.status(203).json({msg: `the game ${req.params.name} was deleted correctly`})
    },
    externalApi: async (req,res) => {
        try {
            const apiData = await axios.get(' https://pokeapi.co/api/v2/pokemon/ditto')
            res.json({response: apiData.data, status: apiData.status})
        } catch (error) {
            res.json({response: error.responese.data, status: error.response.status})
        }
    }
}


