const router = require('express').Router();
const { Trip, User } = require('../models');
const withAuth = require('../utils/auth.js')
//add withAuth to all requests

// home page - what do we want on here?
router.get('/', async (req, res) => {
    try {
        console.log("is this working?")
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

// create new trip page
router.get('/plan', async (req, res) => {
    try {
        res.render('plan', {loggedIn: req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err)
    }
})
// view all my trips - view handlebars
router.get('/mytrips', async (req, res) => {
    try {
        const tripData = await Trip.findAll({
            include: [{ model: User, attributes: ['username'] }],
            where: {userid: req.session.id}
        })
        const trips = tripData.map((trip) => trip.get({ plain: true }));
        res.render('view', { trips, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err)
    }
})

// view all public trips page
router.get('/trips', async (req, res) => {
    try {
        const tripData = await Trip.findAll({
            include: [{ model: User, attributes: ['username'] }],
            where: { public: true } // only Trips where public is set to true ? may need to refactor this to get it to function properly
        })
        const trips = tripData.map((trip) => trip.get({ plain: true }));
        res.render('public', { trips, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err)
    }
})


// view a single trip
router.get('/trips/:id', async (req, res) => {
    try {
        const tripData = await Trip.findByPk((req.params.id),
            {
                include: [
                    { model: User, attributes: ['name'] },
                    { model: Comment, attributes: ['content'] }
                ],
            })
        const trip = tripData.map((trip) => trip.get({ plain: true }));
        res.render('singletrip', { trip, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;