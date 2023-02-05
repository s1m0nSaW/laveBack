import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    prof: String, 
    workTime: {
        type: Number,
        default: 8,
    },
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
    debts: {
        type: Number,
        default: 0,
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
        amount: Number,
        date: Number,
    },
    credits:{
        type: Array,
        default: [],
    },
    record:{
        age: Number,
        prof: String,
        cashflow: Number,
        bizCount: Number,
        deposit: Number,
        rentCount: Number,
        houseSumm: Number,
        carSum: Number,
    },
    expenses:Number,
    datePoint:Date,
    freeEnergizer:{
        type: Number,
        default: 0,
    },
    freeEnergizerCount:{
        type: Number,
        default: 2,
    },
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
    freeEnergizerOn:{
        type: Boolean,
        default: true,
    },
    lifesCount:{
        type: Number,
        default: 1,
    },
    greetingIn:{
        type: Array,
        default: [],
    },
    greetingOut:{
        type: Array,
        default: [],
    },
    disabled:{
        type: Array,
        default: [],
    },
    promoter:{
        type: Boolean,
        default: false,
    },
    photo100: String,

},{
    timestamps:true,
},
);

export default mongoose.model('User', UserSchema);