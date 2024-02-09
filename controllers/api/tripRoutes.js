const router = require('express').Router();
const { Trip, Comment } = require('../../models');

// post call for new trip
// post call for new comment
// put call for editing trip
// put call for editing comment?
// delete call for trip
// delete call for comment
router.post('/', async (req, res) => {
    try {
        const newTrip = await Trip.create({
            ...req.body,
            user_id: req.session.user_id
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})
router.post('/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;