import mongoose from "mongoose";

const BusSchema = new mongoose.Schema({
    busName:{
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
    rent:{
        type: Number,
        required: true,
    },
    promotion: {
        type: Number,
        minimum: 0,
        required: true,
    },
    workersSalary: {
        type: Number,
        minimum: 0,
        required: true,
    },
    markup: {
        type: Number,
        minimum: 0,
        required: true,
    },
    purchase: {
        type: Number,
        minimum: 0,
        required: true,
    },
},{
    timestamps:true,
},
);

export default mongoose.model('Business', BusSchema);