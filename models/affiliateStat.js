import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
    {
        name : String,
        price: Number,
        description: String,
        category: String,
        rating: Number,
        supply: Number
    },{
        timestamps: true
    }
);

// ("nama model", skema)
const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);

export default AffiliateStat;