import Gadget from "../model/gadget.model.js";

export const getGadget = async(req, res) => {
    try {
        const gadget = await Gadget.find();
        res.status(200).json(gadget);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
};