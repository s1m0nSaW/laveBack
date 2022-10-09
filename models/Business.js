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
    bizType:{
        type: Number,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    workersCount:{
        type: Number,
        required: true,
    },
    profit:{
        type: Number,
        required: true,
    },
    imageUrl: String,
},{
    timestamps:true,
},
);

export default mongoose.model('Business', BusSchema);