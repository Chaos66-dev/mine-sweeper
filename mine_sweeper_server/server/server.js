const express = require('express');
const server = express()
const cors = require('cors');
const knex = require('knex');
const knex_config = require('../knexfile.js');
require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';
const db = knex(knex_config[environment])
server.use(express.json())
server.use(cors())

server.get('/', async (req, res) => {
        try {
            const query = await db('scores').select("*")

            if (query.length > 0) {
                res.status(200).json(query)
            } else {
                res.status(404).json({error: `No rows returned from query`})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({error: 'Internal Server Error'})
        }
    }
)

module.exports = server