const router = require('express').Router();
const { Trip , User } = require('../models');

// home page?
router.get('/', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err)
    }
})

// login page
router.get('/login', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})

// all public trips page
router.get('/trips', async (req, res) => {
    try {
        const tripData = await Trip.findall({
            include: [{model: User, attributes: ['name']}],
            where: { isPublic: true } // only Trips where isPublic is set to true ? may need to refactor this to get it to function properly
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// view a single trip
router.get('/:id', async (req, res) => {
    try {
        const tripData = await Trip.findByPk((req.params.id),
            { include: [{model: User, attributes: ['name']}],
        })
    } catch (err) {
        res.status(500).json(err)
    }
})