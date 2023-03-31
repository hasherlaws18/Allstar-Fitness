const router = require('express').Router();
const { Post } = require('../../models');

const withAuth = require('../../utils/Auth');


// // Get all posts
// router.get("/", (req, res) => {
//     Post.findAll({
//             attributes: ["id", "content", "title", "created_at"],
//             order: [
//                 ["created_at", "DESC"]
//             ]
//         })
//         .then((dbPostData) => res.json(dbPostData))
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// // Get a single post
// router.get("/:id", (req, res) => {
//     Post.findOne({
//             where: {
//                 id: req.params.id,
//             },
//             attributes: ["id", "content", "title", "created_at"]
//         })
//         .then((dbPostData) => {
//             if (!dbPostData) {
//                 res.status(404).json({
//                     message: "No post found with this id"
//                 });
//                 return;
//             }
//             res.json(dbPostData);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// Create a post
router.post("/", withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newPost);
      } catch (err) {
        res.status(400).json(err);
      }
});

// Update a post
router.put("/:id", withAuth, async (req, res) => {
    Post.update({
            title: req.body.title,
            content: req.body.post_content,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({
                    message: "No post found with this id!"
                });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Delete a post
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
    
        if (!projectData) {
          res.status(404).json({ message: 'No project found with this id!' });
          return;
        }
    
        res.status(200).json(projectData);
      } catch (err) {
        res.status(500).json(err);
      }
});



module.exports = router;