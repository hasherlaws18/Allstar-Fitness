const router = require('express').Router();
const { User } = require('../../models');


// //Get all users
// router.get('/', (req,res) => {
//     User.findAll({
//         attributes: {
//             exclude: ['password']
//         }
//     })
//     .then(dbUserData => res.json(dbUserData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // Get specific user
// router.get('/:id', (req, res) => {
//     User.findOne({
//             attributes: {
//                 exclude: ['password']
//             },
//             where: {
//                 id: req.params.id
//             },
//             include: [{
//                     model: Post,
//                     attributes: ['id', 'title', 'content', 'created_at']
//                 }
//             ]
//         })
//         .then(dbUserData => {
//             if (!dbUserData) {
//                 res.status(404).json({
//                     message: 'No user found with this id!'
//                 });
//                 return;
//             }
//             res.json(dbUserData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// Create a user
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
    
          res.status(200).json(userData);
        });
      } catch (err) {
        res.status(400).json(err);
      }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
    
        if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again!' });
          return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(400).json(err);
      }
});


// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }

});

module.exports = router;