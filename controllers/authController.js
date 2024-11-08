const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bycrypt.hash(password, 10);
        const user = new User({name, email, password : hashedPassword});
        await user.save();

        res.status(201).json({user:user,message : "User registered Successfully"});
    } catch (error) {
        res.status(400).json({ message : error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if ( !user || !(await bycrypt.compare(password, user.password))) {
            return res.status(401).json({message : "Invalid email or password"}); 
        }
        const token = jwt.sign(
            {userId : user._id, email: user.email },
            process.env.JWT_SECRET,
            {expiresIn:process.env.JWT_EXPIRED_IN || "1h"}
        );
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message : error.message });
    }
}