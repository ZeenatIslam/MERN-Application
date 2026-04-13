const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
//Components of JWT 
//Header: conains metadata about the token ,such as the type of token and the signing algorithm being used.
//Payload:contains claims or statements about an entity {typically the user }and additional data.commans claims icludes user IDm username and exoiration time
//signature :to verify that the sender of the JWT is who it says it is and to ensure that the message was not changes along the way ,a signature is inclined.
const  userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
})


 
userSchema.methods.generateTokens = async function () {
    try {
        return jwt.sign(
            { userId: this._id.toString(), email: this.email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "30d" }
        );
    } catch (error) {
        console.log(error);
    }
};
//define collection name ...model have two argue
// ment 1-collection name and 
const User=new mongoose.model("User",userSchema);
module.exports=User;