import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    prof:{
        type: String,
        required: true,
    },
    userId:{
        type: String,
        required: true,
        unique: true,
    },
    balance: {
        type: Number,
        default: 100,
    },
    age:{
        type: Number,
        required: true,
    },
    house: {
        type: Array,
        default: [],
    },
    car: {
        type: Array,
        default: [],
    },
    bizs: {
        type: Array,
        default: [],
    },
},{
    timestamps:true,
},
);

export default mongoose.model('User', UserSchema);