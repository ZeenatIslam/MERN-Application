const mongoose=require("mongoose");
const URI="mongodb+srv://admin:N4g7EGAccRVcEUMO@cluster0.kfvwnmh.mongodb.net/?appName=Cluster0"

//N4g7EGAccRVcEUMO
const connectDB=async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connected to the database");

    }catch(error){
        console.error("database connection failed",error);
        process.exit(1);
    }
}
module.exports=connectDB;