const User = require('../models/User');

// module.exports.createUser = async  (req, res, next) => {
//     const newUser = new User(req.body);
//     try {
//         const savedUser = await newUser.save();
//         res.status(200).json(savedUser);
//     } catch (err) {
//         next(err);
//     }
// }we are creating uwser by register function

module.exports.updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updateUser);
    } catch (err) {
        next(err);
    }
}

module.exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (err) {
        next(err);
    }
}

module.exports.getUser = async (req, res, next) => {
    try {
        const User = await User.findById(req.params.id);
        res.status(200).json(User);
    } catch (err) {
        next(err);
    }
}

module.exports.getAllUser = async (req, res, next) => {
    try {
        const Users = await User.find();
        res.status(200).json(Users);
    } catch(err) {
        next(err);
    }
}