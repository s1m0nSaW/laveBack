import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    energy:{
        type: Number,
        required: true,
    },
    time:{
        type: Number,
        required: true,
    },
    rentPrice:{
        type: Number,
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