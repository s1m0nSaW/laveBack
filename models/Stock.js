import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
    stockName:{
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    stockPrice: {
        type: Number,
        minimum: 0,
    },
},{
    timestamps:true,
},
);

export default mongoose.model('Stock', StockSchema);