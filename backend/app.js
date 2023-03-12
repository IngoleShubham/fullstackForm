import express from "express";
import dbconfig from "./db/dbconfig.js";
import UserModel from "./models/user.js";
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())

//database connection 
dbconfig();

app.get("/", (req, res) => {
    res.json({message: "got it "})
})

//Add user api
app.post('/api/signup', async (req, res) => {
    const {name, address, education, gender, password} = req.body;
    try {
        if( !name || !address || !education || !gender || !password){
            return res.json({
                error: true,
                message: 'Please fill all the fields',
            });
        }
        const user = await UserModel.create({
            name, address, education, gender, password
        })
        res.json(user);
    } 
    
    catch (error) {
        console.log(error)
    }
})

//Login User API
app.post('/api/login', async (req, res)=>{
    const { name, password } = req.body;

    try {
        const user = await UserModel.findOne({name});

        if(!user){
            res.json({error: true, message: "User not found"})
        }
        if(user.password != password){
            return res.json({
                error: true, 
                message: "Password is wrong"
            })
        }
        res.json(user.name, user.education, user.address, user.gender);
    } 
    catch (error) {
        console.log(error)
    }
})

app.get("/api/users", async (req, res) => {
    const user = await UserModel.find();
    return res.send(user);
    // console.log(user)
})

app.listen(8080, ()=>{
    console.log("server is running")
})