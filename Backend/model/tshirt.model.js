import mongoose from 'mongoose';

const tshirtSchema = mongoose.Schema({
    name: String,
    image: String,
    image2: String,
    image3: String,
    image4: String,
    company: String,
    item_name: String,
    original_price: Number,
    current_price: Number,
    rating: {
        stars: Number,
        count: Number,
    },
});

const Tshirt = mongoose.model("Tshirt", tshirtSchema);

export default Tshirt;