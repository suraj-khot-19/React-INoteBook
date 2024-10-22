const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const auth = require("../../Middlewares/auth");

//! signup user
router.post('/signup', auth, async (req, res) => {
    User.create({
        fname: 'suraj',
        lname: 'khot',
        email: 'rowdy@gmail.com',
        password: '123456789',
    });
});

// ! get all users
router.get('/getall', async (req, res) => {
    try {
        let users = await User.find();
        res.send({ sucess: true, users })
    } catch (error) {
        res.send({ sucess: false, error: "no users in db" });
    }
});

// ! get user by id
router.get('/find/:uid', async (req, res) => {
    const id = req.params.uid;
    try {
        let user = await User.findById(id);
        res.send({ sucess: true, user });
    } catch (error) {
        res.send({ sucess: false, error: `can not find user by id ${id}` });
    }
});
module.exports = router;
