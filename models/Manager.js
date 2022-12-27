import mongoose from "mongoose";

const ManagerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    salary:{
        type: Number,
        required: true,
    },
    userId: String,
    bizCount:{
        type: Number,
        required: true,
    },
    bizType:{
        type: String,
        required: true,
    },
    bizs: Array,
},{
    timestamps:true,
},
);

export default mongoose.model('Manager', ManagerSchema);