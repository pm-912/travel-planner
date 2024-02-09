const router = require('express').Router();
const { Trip, User } = require('../models');
const withAuth = require('../utils/auth.js')

// home page - what do we want on here?
router.get('/', async (req, res) => {
    try {
        res.render('homepage')
    } catch (err) {
        res.status(500).json(err)
    }
})

// get the login/signup page
router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/');
            return;
        }
        res.render('login');
    } catch (err) {
        res.status(500).json(err)
    }
})

// all public trips page
router.get('/trips', withAuth, async (req, res) => {
    try {
        const tripData = await Trip.findall({
            include: [{ model: User, attributes: ['name'] }],
            where: { public: true } // only Trips where public is set to true ? may need to refactor this to get it to function properly
        })
        const trips = tripData.map((trip) => trip.get({ plain: true }));
        res.render('trips', { trips })
    } catch (err) {
        res.status(500).json(err)
    }
})

// view a single trip
router.get('/trips/:id', withAuth, async (req, res) => {
    try {
        const tripData = await Trip.findByPk((req.params.id),
            {
                include: [
                    { model: User, attributes: ['name'] },
                    { model: Comment, attributes: ['content'] }
                ],
            })
        const trip = tripData.map((trip) => trip.get({ plain: true }));
        res.render('trip', { trip })
    } catch (err) {
        res.status(500).json(err)
    }
})