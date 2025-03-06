const express = require('express');
const mongoose = require('mongoose');
 require('./models/User');

 require("dotenv").config();

 app.use(express.json());

 //connect, then, catch

 mongoose
 .coonect(process.env.MONGO_URI || "mongodb://localhost:27017/kompania")
 .then(() => console.log("Database is connected!"))
 .catch((err) => console.log(`Something went wrong ${err}`));

 app.post("/users", async (req, res) => {

    try{
      const {name, email} = req.body;
      const newUser = new User({name, email});
        await newUser.save();

        res.status(201).json({message: "User created successfully!", user: newUser});
    }

    catch(err){
        res.status(400).json({error: err.message});
    }

 });

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));