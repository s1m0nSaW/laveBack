import mongoose from "mongoose";

const ProfSchema = new mongoose.Schema({
    profName:{
        type: String,
        required: true,
    },
    salary:{
        type: Number,
        required: true,
    },
    childCount:{
        type: Number,
        required: true,
    },
    childExp:{
        type: Number,
        required: true,
    },
    car:{
        type: String,
        required: true,
    },
    house:{
        type: String,
        required: true,
    },
},{
    timestamps:true,
},
);

export default mongoose.model('Prof', ProfSchema);