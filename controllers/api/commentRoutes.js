const router = require('express').Router();
const { Comment } = require('../../models');

// post call for adding a new comment
router.post('/:id', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(newcomment)
    } catch (err) {
        res.status(500).json(err)
    }
})

// comment update?
// router.put('/:id', async (req, res) => {
//     try {

//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

// delete comment - 
router.delete('/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
