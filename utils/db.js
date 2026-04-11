require("dotenv").config();
const mongoose=require("mongoose");
const URI=process.env.MONGO_URI;

//N4g7EGAccRVcEUMO
const connectDB=async()=>{
    try{
        await mongoose.connect(URI);
        console.log("MongoDB connected successfully");

    }catch(error){
        console.error("Connection failed ",error);
        process.exit(1);
    }
}
module.exports=connectDB;