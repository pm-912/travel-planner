const router = require('express').Router();
const { Trip } = require('../../models');
const withAuth = require('../../utils/auth')
// ADD withAuth to functions before finish

// post call for new trip
router.post('/', async (req, res) => {
    try {
        const newTrip = await Trip.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(newTrip)
    } catch (err) {
        res.status(500).json(err)
    }
})

// put call for editing trip
router.put('/:id', async (req, res) => {
    try {
        const updateTrip = await Trip.update(
            { // eligible datapoints to update
                destination: req.body.destination,
                stay: req.body.stay,
                departure: req.body.departure,
                accomodation: req.body.accomodation,
                public: req.body.public
            },
            {
                where: { trip_id: req.params.id }
            }
        )
            res.status(200).json(updateTrip)

    } catch (err) {
        res.status(500).json(err)
    }
})

// delete call for trip
router.delete('/:id', async (req, res) => {
    try {
        Trip.destroy({
            where: { id: req.params.id}
        })
        res.status(200).json("Trip successfully deleted")
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tripData = await Trip.findByPk(req.params.id)
        res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;