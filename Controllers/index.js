const router = require('express').Router();
const apiRoutes = require('./api');

const homeRoutes = require('/homeRoutes');
const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;