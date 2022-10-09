import mongoose from "mongoose";

const ManagerSchema = new mongoose.Schema({
    managerName:{
        type: String,
        required: true,
    },
    managerPrice:{
        type: Number,
        required: true,
    },
    bizType:{
        type: Number,
        required: true,
    },
    bizsCount:{
        type: Number,
        required: true,
    },
    bizs: {
        type: Array,
        default: [],
    },
    userId:{
        type: String,
        required: true,
    },
},{
    timestamps:true,
},
);

export default mongoose.model('Manager', ManagerSchema);