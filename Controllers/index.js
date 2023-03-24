const router = require('express').Router();

const homeRoutes = require('/homeRoutes');
const userRoutes = require('api/userRoutes');

router.use('/', homeRoutes);
router.use('/users', userRoutes);

// Add other API routes

module.exports = router;