const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/userModel.js');

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // if email is resgistered
        const emailExists = await User.findOne({ where: { email: req.body.email }}); //check
        if (emailExists) {
            return res.status(400).json({ message: "Email already exists" });
        }
        // see if username is taken
        const usernameExists = await User.findOne({ where: { username: req.body.username }});
        if (usernameExists) {
            return res.status(400).json({ message: "Username already taken" });
        }
        // make new user
        const newUser = new User({
            username,
            email,
            password
        });
        // save user
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
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

router.post('/logout', (req, res) => {
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

// only for testing purposes
router.get('/:userid', async (req, res) => {
    try {
        const userData = await User.findByPk((req.params.userid))
        res.status(200).json({userData})
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
