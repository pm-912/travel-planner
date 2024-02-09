const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/users');

router.post('/', async (req, res) => {
    const { emailOrUsername, password } = req.body;

    try {
        // if user exist by email or username
        const user = await User.findOne({
            $or: [
                { email: emailOrUsername },
                { username: emailOrUsername }
            ]
        });

        // if no matches throw an error
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // check password between user password and hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        // If they dont match throw an error
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        // new user session
        req.session.user = user;
        // aucess message 
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
