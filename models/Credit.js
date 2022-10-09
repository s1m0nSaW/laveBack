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
    creditTerm:{
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