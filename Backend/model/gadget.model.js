import mongoose from "mongoose";

const gadgetSchema = mongoose.Schema({
    name: String,
    image: String,
    image2: String,
    image3: String,
    image4: String,
    brand: String,
    name: String,
    original_price: Number,
    current_price: Number,
    rating: {
        stars: Number,
        count: Number,
    },
});

const Gadget = mongoose.model("Gadget", gadgetSchema);

export default Gadget;