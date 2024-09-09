import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tshirtRoute from "./route/tshirt.route.js";
import gadgetRoute from "./route/gadget.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;
const URI = process.env.URI;

// Connecting to MongoDB

try{
    mongoose.connect(URI);
    console.log('Conneted to Database');
}
catch (error) {
    console.log(error);
}

// Defining Routes

app.use("/tshirt", tshirtRoute);
app.use("/gadget", gadgetRoute);
app.use("/user", userRoute);

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
});
