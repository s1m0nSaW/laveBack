import mongoose from "mongoose";

const RealEstateSchema = new mongoose.Schema({
    realEstateName:{
        type: String,
        required: true,
    },
    realEstatePrice:{
        type: Number,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    profit: {
        type: Number,
        minimum: 0,
    },
    imageUrl: String,
},{
    timestamps:true,
},
);

export default mongoose.model('RealEstate', RealEstateSchema);