import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    prof: String,
    salary: Number,
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
    children:{
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
    rent: {
        type: Array,
        default: [],
    },
    bizs: {
        type: Array,
        default: [],
    },
    deposit:{
        type: Number,
        default: 0,
    },
    credits:{
        type: Array,
        default: [],
    },
    mortgages:{
        type: Array,
        default: [],
    },
    expenses:Number,
    datePoint:Date,
    onGame:Boolean,
    time:{
        type: Number,
        default: 10,
    },
    energy:{
        type: Number,
        default: 100,
    },
    maxEnergy:{
        type: Number,
        default: 100,
    },
    energizer:{
        type: Number,
        default: 0,
    },
    lifesCount:{
        type: Number,
        default: 1,
    },
},{
    timestamps:true,
},
);

export default mongoose.model('User', UserSchema);