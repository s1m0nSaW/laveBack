import mongoose from "mongoose";

const HouseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    energy:{
        type: Number,
        required: true,
    },
    recovery:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    rentPrice:{
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