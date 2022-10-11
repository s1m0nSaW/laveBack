import mongoose from "mongoose";

const CreditSchema = new mongoose.Schema({
    creditName:{
        type: String,
        required: true,
    },
    creditAmount:{
        type: Number,
        required: true,
    },
    creditTotal:{
        type: Number,
        required: true,
    },
    creditPeriod:{
        type: Number,
        required: true,
    },
    creditPay:{
        type: Number,
        required: true,
    },
    creditPercent:{
        type: Number,
        required: true,
    },
    imageUrl: String,
},{
    timestamps:true,
},
);

export default mongoose.model('Credit', CreditSchema);