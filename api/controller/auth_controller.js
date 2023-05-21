const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
module.exports.register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save()
        res.status(200).send('user has been created');
    } catch (err) {
        next(err);
    }
}

//login
module.exports.login = async (req, res, next) => {
    try {
       const user = await User.findOne({username: req.body.username});
       if(!user) 
       return res.status(404).send("user not found");

       const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
       if(!isPasswordCorrect)
       return res.status(400).send("username or password incorrect");

       //hiding password from displaying
       const{password, ...otherDetails} = user._doc;
        res.status(200).json({...otherDetails});
    } catch (err) {
        next(err);
    }
}