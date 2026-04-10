const express=require("express");
const app=express();
const authRoute=require("./router/auth-router");
const connectDB=require("./utils/db");

// Middleware
app.use(express.json());


app.use("/api/auth",authRoute);

const PORT=5000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("server is running on port:",PORT);
})


})
