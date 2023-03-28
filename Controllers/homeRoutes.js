const router = require(express).router();
const {User} = require('../models');
const { findAll } = require('../models/User');
const withAuth = require('../utils/Auth');

//Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
            order: [['name', 'ASC']],
        });

        const users = userData.map((project) => project.get({plain: true}));

        res.render('homepage', {
            users,
            //pass the logged in flag to the template
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//if a session exists, redirect the request to the homepage
router.get('/login', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

//Returns signup page
router.get('/signup', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;
