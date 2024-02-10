const router = require('express').Router();
const userRoutes = require('./userinfo.js');
const tripRoutes = require('./tripRoutes');
const commentRoutes = require('./commentRoutes.js');

router.use('/users', userRoutes);
router.use('/trips', tripRoutes);
router.use('/commments', commentRoutes);

module.exports = router;