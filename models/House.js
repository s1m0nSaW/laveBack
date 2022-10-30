import mongoose from "mongoose";

const HouseSchema = new mongoose.Schema({
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
},{
    timestamps:true,
},
);

export default mongoose.model('House', HouseSchema);