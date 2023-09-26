import express from "express";
import mongoose from "mongoose";
import activityRouter from "./activity-routes.js";


const http=require('http');
const fs=require('fs');
const PORT=3000;

const app=express();
app.use(express.json());    
app.use('/api/activity',activityRouter);


mongoose.connect("mongodb+srv://ponvasanthsstudent:dVU8V2Dvgz3xMyKW@blogapi.ccahyph.mongodb.net/")
.then(()=>app.listen(PORT),
console.log("Connected to PORT"))
.then(()=>
console.log("Connected to Database"))
.catch((err) => console.log(err));



