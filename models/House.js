import mongoose from "mongoose";

const HouseSchema = new mongoose.Schema({
    houseName:{
        type: String,
        required: true,
    },
    housePrice:{
        type: Number,
        required: true,
    },
    houseExp:{
        type: Number,
        required: true,
    },
    imageUrl: String,
},{
    timestamps:true,
},
);

export default mongoose.model('House', HouseSchema);