const router = require('express').Router();
const { Comment } = require('../../models');

// post call for adding a new comment
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(newComment)
    } catch (err) {
        res.status(500).json(err)
    }
})

// comment update?
router.put('/:id', async (req, res) => {
    try {
        const updateComment = await Comment.update(
            { // eligible datapoints to update
                content: req.body.content
            },
            {
                where: { commentid: req.params.id }
            })
            console.log(updateComment);
        res.status(200).json(updateComment)
    } catch (err) {
        res.status(500).json(err)
    }
});

// delete comment - 
router.delete('/:id', async (req, res) => {
    try {
        Comment.destroy({
            where: { commentid: req.params.id}
        })
        res.status(200).json("Comment successfully deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id)
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
