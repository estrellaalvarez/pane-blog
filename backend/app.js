import express from "express";
import mongoose from 'mongoose';
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from 'cors';
import morgan from "morgan";

const cors = require("cors")
const morgan = require("morgan")

const app = express();
app.use(cors());
app.use(morgan("dev")); // logging for development


app.use(express.json());

app.get("/", (req, res) => {
    res.redirect('/api/users' )
})

app.use("/api/user", router);

app.use("/api/blog", blogRouter);

mongoose.connect(
    'mongodb+srv://admin:pane@cluster0.wvqjpni.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(()=> app.listen(5000))
    .then(()=> console.log("Connected"))
    .catch((err)=> console.log(err));
