import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    work:{
        type: String,
        required: true,
    },
    id:{
        type: String,
        required: true,
        unique: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
    buzs: {
        type: Array,
        default: [],
    },
    stocks: {
        type: Array,
        default: [],
    },
    realEstates: {
        type: Array,
        default: [],
    },
},{
    timestamps:true,
},
);

export default mongoose.model('User', UserSchema);