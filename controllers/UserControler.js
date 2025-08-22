const User = require("../models/User");
const newUser = async (req,res) => {
    const {first_name,last_name,email,message} = req.body;
    
    const user = new User({
        first_name,
        last_name,
        email,
        message
    });

    try {
        const result = await user.save();
        res.send(result);
    } catch (error) {
        res.send(error);
    }

}


module.exports  = newUser;