import mongoose from "mongoose";

const RealEstateSchema = new mongoose.Schema({
    realEstateName:{
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    realEstatePrice: {
        type: Number,
        minimum: 0,
    },
    realEstateProfit: {
        type: Number,
        minimum: 0,
    },
},{
    timestamps:true,
},
);

export default mongoose.model('RealEstate', RealEstateSchema);