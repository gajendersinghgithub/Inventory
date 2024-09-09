import mongoose from "mongoose";
import Tshirt from "../model/tshirt.model.js";

export const getTshirt = async(req, res) => {
    try {
        const tshirt = await Tshirt.find();
        res.status(200).json(tshirt);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
};
