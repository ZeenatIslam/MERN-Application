const mongoose=require("mongoose");

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
//define collection name ...model have two argue
// ment 1-collection name and 
const User=new mongoose.model("User",userSchema);
module.exports=User;