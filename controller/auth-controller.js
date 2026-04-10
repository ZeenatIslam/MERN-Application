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
        console.log(req.body);
        res.status(200).send("welcome to the register page");

    }catch(error)
    {
        res.status(500).send("internal server error");
    }

}
module.exports = { home ,register};