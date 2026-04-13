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
         if (!username || !email || !phone || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const userExist=await User.findOne({email});
        if(userExist)
        {
            return res.status(400).json({msg:"email already exists"});

        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const userCreated= await User.create({username,email,phone,password :hashedPassword})

        console.log(req.body);
        res.status(201).json({msg:"Registration Sucessfull",token: await userCreated.generateTokens(),userId:userCreated._id.toString(),});

    }catch(error)
    {
        res.status(500).send("internal server error");
    }

}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const isMatch = await bcrypt.compare(password, userExist.password);

        if (isMatch) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateTokens(), 
                userId: userExist._id.toString(),        
                       });
        } else {
            res.status(401).json({ msg: "Invalid Credentials" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};
module.exports = { home ,register,login};