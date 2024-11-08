const userService = require('../services/userService');

exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
};


exports.getAllUser = async (req,res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({message : 'User not Found'});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
};

exports.deleteUser= async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({message : 'User not Found'});
        }
        res.status(200).json({message :'User Deleted Successfully'});

    } catch (error) {
        res.status(400).json({message : error.message});
    }
}