import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    expenses:{
        type: Number,
        required: true,
    },
    imageUrl: String,
    sellPrice: Number,
},{
    timestamps:true,
},
);

export default mongoose.model('Car', CarSchema);