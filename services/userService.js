const User = require('../models/userModel');

exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

exports.getAllUsers = async () => {
    return await User.find();
};

exports.getUserById = async (id) => {
    return await User.findById(id);
};

exports.updateUser = async (id,updateData) => {
    return await User.findByIdAndUpdate(id,updateData, {new:true, runValidators:true});
};

exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};