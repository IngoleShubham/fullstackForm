// mongodb+srv://admin:admin@cluster0.la2hr6n.mongodb.net/mlscDB?retryWrites=true&w=majority

// const mongoose = require('mongoose');
import mongoose from "mongoose";

// main().catch(err => console.log(err));

async function dbconfig() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.la2hr6n.mongodb.net/Intern?retryWrites=true&w=majority').catch(err => {
    console.log(err)
  }).then(res => {
    console.log("database connected")
  })
  
//   await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
//    if your database has auth enabled
}

export default dbconfig;