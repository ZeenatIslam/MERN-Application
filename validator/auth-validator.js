const { z} = require("zod");
const signupSchema=z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"name must be at least of 3 characters"})
    .max(20,{message:"must not be more then 20 characters"});
    password:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"name must be at least of 3 characters"})
    .max(20,{message:"must not be more then 20 characters"});
    email:z
    .string({required_error:"Name is required"})
    .trim()
    .email({message:"email must be valid"})
    .min(3,{message:"name must be at least of 3 characters"})
    .max(20,{message:"must not be more then 20 characters"});
    phone:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"name must be at least of 3 characters"})
    .max(20,{message:"must not be more then 20 characters"})
    

})
module.exports=signupSchema;