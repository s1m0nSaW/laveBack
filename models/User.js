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
    userId:{
        type: String,
        required: true,
        unique: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
    house: {
        type: Array,
        default: [],
    },
    car: {
        type: Array,
        default: [],
    },
    credit: {
        type: Array,
        default: [],
    },
},{
    timestamps:true,
},
);

export default mongoose.model('User', UserSchema);