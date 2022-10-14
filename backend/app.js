import express from "express";
import mongoose from 'mongoose'
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from 'cors';

app.use(cors());
const app = express();

app.use(express.json());

app.use("/user", router);

app.use("/blog", blogRouter);

mongoose.connect(
    'mongodb+srv://admin:pane@cluster0.wvqjpni.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(()=> app.listen(5000))
    .then(()=> console.log("Connected"))
    .catch((err)=> console.log(err));
