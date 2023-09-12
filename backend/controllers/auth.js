const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');

exports.signup = async (req,res) => {
    try {
        const {name , email , password , confirmPassword} = req.body;
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({
                succsess: false,
                msg: 'Some entries are null'
            });
        }
        if (password != confirmPassword) {
            return res.status(400).json({
                succsess: false,
                msg: 'Password do not macth'
            });
        }

        const isPresent = await User.findOne({email: email});
        if (isPresent) {
            return res.status(400).json({
                succsess: false,
                msg: 'user already exist'
            });
        }

        const hash = bcrypt.hash(password , 10);
        User.create({
            name: name,
            email: email,
            password: hash,
            role: 'Admin',
        });
        res.status(200).json({
            succsess: true,
            msg: 'user signed up'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            succsess: false,
            msg: 'unable to signup'
        });
    }
}

exports.login = async (req,res) => {
    try {
        const {email , password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                succsess: false,
                msg: 'Some entries are null'
            });
        }

        const isPresent = await User.find({email:email});
        if (!isPresent) {
            return res.status(400).json({
                succsess: false,
                msg: 'User do not exist'
            });
        }

        const verify = await bcrypt.compare(password , isPresent.password);
        if (!verify) {
            return res.status(400).json({
                succsess: false,
                msg: 'Password do not macth'
            });
        }
        const token = jwt.sign(isPresent,'token',process.env.JWT_SECRET);
        res.cookie('token',token);
        res.status(200).json({
            succsess: true,
            msg: 'user logged in'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            succsess: false,
            msg: 'unable to login'
        });
    }
}