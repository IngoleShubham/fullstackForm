import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    address: {
        type: String
    },
    education:{
        type: String
    },
    gender:{
        type: String
    },
    password:{
        type: String
    }
})
const UserModel = mongoose.model('User', userSchema);
export default UserModel