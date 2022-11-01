import mongoose from "mongoose";

const BusSchema = new mongoose.Schema({
    bizName:{
        type: String,
        required: true,
    },
    bizPrice:{
        type: Number,
        required: true,
    },
    sellPrice:{
        type: Number,
        required: true,
    },
    maxProfit:{
        type: Number,
        required: true,
    },
    minProfit:{
        type: Number,
        required: true,
    },
    risk:{
        type: String,
        required: true,
    },
    imageUrl: String,
},{
    timestamps:true,
},
);

export default mongoose.model('Business', BusSchema);