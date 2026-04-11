const User=require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
    try {
        res
        .status(200)
        .send("welcome to the auth router");
    } catch (error) {
        console.log(error);
    }
};

const register=async(req,res)=>{
    try{
        const {username,email,phone,password } = req.body;
        const userExist=await User.findOne({email});
        if(userExist)
        {
            return res.status(400).json({msg:"email already exists"});

        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({username,email,phone,password :hashedPassword})

        console.log(req.body);
        res.status(201).send("welcome to the register page");


    }catch(error)
    {
        res.status(500).send("internal server error");
    }

}
module.exports = { home ,register};