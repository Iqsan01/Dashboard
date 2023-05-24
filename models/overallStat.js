import mongoose from "mongoose";

const OverallStatScema = new mongoose.Schema(
    {
        totalCustomers: Number,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
        dailyData: [
            {
                date: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
        salesByCategory: {
            type: Map,
            of: Number,
        },
    },{
        timestamps: true
    }
);

// ("nama model", skema)
const OverallStat = mongoose.model("OveralStat", OverallStatScema);

export default OverallStat;
