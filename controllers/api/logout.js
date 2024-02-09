const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        // destroy user session
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Failed to logout" });
            }
            // logout and redirect
            res.status(200).json({ message: "Logout successful" });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
