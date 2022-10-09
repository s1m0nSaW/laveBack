import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    carName:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    carExp:{
        type: Number,
        required: true,
    },
    imageUrl: String,
},{
    timestamps:true,
},
);

export default mongoose.model('Car', CarSchema);